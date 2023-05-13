const {ProductsName} = require("../../db")
const {data} = require("../../utils/data");

const getAllProducts = async (req, res) => {
    try {
        // first call http://localhost:3001/products/create/data for create products from data.js to db
        let allProducts = await ProductsName.findAll();
        // return res.json([...allProducts, ...data]); // comment for testing
        return res.json(allProducts);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {getAllProducts};
