const { products } = require('../../utils/data');
const { ProductsName } = require("../../db");

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await ProductsName.findAll();
        return  res.json([...products, ...allProducts]) ;
    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }
};

const getProductById = async (id) => {
    const product = products.findIndex(id);
    return product;
  };

module.exports = { getAllProducts, getProductById };