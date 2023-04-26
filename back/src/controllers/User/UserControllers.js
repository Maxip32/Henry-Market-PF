const { User } = require("../../db");

// crea usuarios
const createUser = async (userData) => {
  const { mail, name, surname, password } = userData;

  const newUser = await User.create({
    mail, name, surname, password
  })
  return newUser;
};

// obtiene usuarios de la base de datos
const getUsersFromDB = async () => {
  try {
    const users = await User.findAll({
      attributes: ["id", "mail", "name", "surname", "password"],
    });

    return users.map((user) => {});
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { createUser, getUsersFromDB };
