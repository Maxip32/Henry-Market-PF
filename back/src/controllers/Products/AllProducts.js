const { ProductsName } = require("../../db")
const { data } = require("../../utils/data");

const getAllProducts = async (req, res) => {
  try {
    let allProducts = await ProductsName.findAll();
    return res.json([...allProducts, ...data]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
