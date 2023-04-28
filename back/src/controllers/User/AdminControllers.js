const { Admin } = require("../../db");

const getAdminFromDB = async () => {
  const users = await Admin.findAll({
    attributes: ["id", "mail", "name", "surname", "password", "isAdmin"],
  });

  return users.map((user) => {
    return user;
  });
};

const createAdmin = async (adminData) => {
    const { mail, name, surname, password } = adminData;
  
    const newAdmin = await Admin.create({
      mail,
      name,
      surname,
      password,
    });
    return newAdmin;
  };

module.exports = { getAdminFromDB, createAdmin };
