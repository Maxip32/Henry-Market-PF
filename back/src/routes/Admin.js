const adminRouter = require("express").Router();
const { getAdminFromDB, createAdmin } = require("../controllers/User/AdminControllers");

adminRouter.get("/", async (req, res) => {
  try {
    const admin = await getAdminFromDB();
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

adminRouter.post("/", async (req, res) => {
    try {
      const adminData = req.body;
      if (
        !adminData.mail ||
        !adminData.name ||
        !adminData.surname ||
        !adminData.password
      ) {
        throw new Error("Mandatory data missing");
      }
      const newAdmin = await createAdmin(adminData);
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

module.exports = adminRouter;
