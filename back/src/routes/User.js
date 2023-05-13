const userRouter = require("express").Router();
const {
    createUser,
    getUsersFromDB,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/User/UserControllers");

// get users from DB
userRouter.get("/", async (req, res) => {
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
