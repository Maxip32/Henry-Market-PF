const userRouter = require("express").Router();
const {
    createUser,
    getUsersFromDB,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/User/UserControllers");
const {validateAccessToken, checkRequiredPermissions} = require("../middlewares/auth0.middleware");
const axios = require("axios");
const {User} = require("../db");

// create users from auth0 to postgres db
const tokenAuth0 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2Rldi15aW1rdnVpZ2l2ZTVmMXZjLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJFWXgwV2hxaWkxSU9ZOTdCWlVYNFRzS0NWYW50VWJGVkBjbGllbnRzIiwiYXVkIjoiSGVucnlQZk1hcmtldCIsImlhdCI6MTY4NDM2NTA0MSwiZXhwIjoxNjg0NDUxNDQxLCJhenAiOiJFWXgwV2hxaWkxSU9ZOTdCWlVYNFRzS0NWYW50VWJGViIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbXX0.vfVKtrLzIEok3k0i7GMxLAQyULWbPpt5ozqJ8dH_Rl8"
userRouter.get("/create/users", async (req, res) => {
    try {
        const usersFriomAuth0 = await axios.get("https://dev-yimkvuigive5f1vc.us.auth0.com/api/v2/users", {
            headers: {
                "Authorization": `Bearer ${tokenAuth0}`, // using local token for call users from auth0 api
                "content-type": "application/json"
            }
        });
        // format userdata from auth0 for save to db
        const formatedUsers = usersFriomAuth0.data?.map((user) => {
            return {
                mail: user.email,
                name: user.name,
                surname: user.nickname,
                isAdmin: false,
                deleted: false
            }
        })

        const usersFromDB = await User.findAll();
        const usersFromDbFormated = usersFromDB.map((user) => {
            return {
                mail: user.mail,
                name: user.name,
                surname: user.surname,
                isAdmin: !!user.isAdmin,
                deleted: !!user.deleted
            }
        })

        // check if user already exists in db
        const usersToCreate = formatedUsers.filter((user) => {
            return !usersFromDbFormated.some((dbUser) => {
                return dbUser.mail === user.mail
            })
        })

        await User.bulkCreate([...usersToCreate]) // bulkCreate from users in auth0
        res.status(200).json(await User.findAll());
    } catch (error) {
        res.status(404).json({error: error.message});
    }
})

// get users from DB
userRouter.get("/", validateAccessToken, async (req, res) => {
    try {
        const users = await getUsersFromDB();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});
// get user by id
userRouter.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});
// create user/admin
userRouter.post("/", async (req, res) => {
    try {
        const userData = req.body;
        if (
            !userData.mail ||
            !userData.name ||
            !userData.surname ||
            !userData.password
        ) {
            throw new Error("Mandatory data missing");
        }
        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});
// edit user
userRouter.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const userUpdated = await updateUser({id: userId, ...userData});
        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});
// delete user
userRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        await deleteUser(id);
        res.status(204).send("User deleted");
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

module.exports = userRouter;
