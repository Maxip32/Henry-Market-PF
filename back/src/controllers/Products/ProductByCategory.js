const { ProductsName } = require("../../db");
const { data } = require("../../utils/data");
const { Op } = require("sequelize");

const getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const dbProducts = await ProductsName.findAll({
      where: {
        category: {
          [Op.iLike]: category,
        },
      },
    });
    const dataProducts = data.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    const products = [...dbProducts, ...dataProducts];

    if (products.length > 0) {
      return res.status(200).json(products);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getByCategory };


module.exports = { getByCategory };
