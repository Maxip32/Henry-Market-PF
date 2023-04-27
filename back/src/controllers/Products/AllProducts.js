// const { getApiData, getDbData } = require('./saveData');
const { ProductsName } = require("../../db");

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await ProductsName.findAll();
        return  res.json(allProducts) ;

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }
};

module.exports = { getAllProducts };