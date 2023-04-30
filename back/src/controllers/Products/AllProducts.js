const { Product } = require("../../db");

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await Product.findAll();
        return  res.json(allProducts) ;

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }
};

module.exports = { getAllProducts };