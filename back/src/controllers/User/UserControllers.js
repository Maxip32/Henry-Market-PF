const {User} = require("../../db");

// creates user or admin depending on isAdmin: true or false
//! I will add adress data to users
const createUser = async (userData) => {
    const {mail, name, surname, password, isAdmin, deleted} = userData;

    return await User.create({
        mail,
        name,
        surname,
        password,
        isAdmin: isAdmin || false,
        deleted: deleted || false
    });
};

// gets users from DB
const getUsersFromDB = async () => {
    const users = await User.findAll();

    return users.map((user) => {
        return user;
    });
};

// gets user by Id
const getUserById = async (id) => {
    return await User.findByPk(id);
};

// Edits user data
const updateUser = async (userData) => {
    const findUser = await User.findByPk(userData.id);

    if (!findUser) {
        throw new Error("User not found");
    }

    const {id, ...updatedFields} = userData;

    const [_, [updatedUser]] = await User.update(updatedFields, {
        where: {id},
        returning: true,
    });

    return updatedUser;
};

// deletes user from DB
const deleteUser = async (id) => {
    const findUser = await User.findByPk(id);

    if (!findUser) {
        throw new Error("User not found");
    }

    const [_, deletedUser] = await User.update({deleted: true}, {
            where: {id},
            returning: true,
        }
    )
    return deletedUser
};

module.exports = {
    createUser,
    getUsersFromDB,
    getUserById,
    updateUser,
    deleteUser,
};