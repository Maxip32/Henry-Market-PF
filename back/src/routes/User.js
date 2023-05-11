const userRouter = require("express").Router();
const {
  createUser,
  getUsersFromDB,
} = require("../controllers/User/UserControllers");

userRouter.get("/", async (req, res) => {
  try {
    const users = await getUsersFromDB();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

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
    res.status(404).json({ error: error.message });
  }
});

module.exports = userRouter;
