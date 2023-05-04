const { ProductsName } = require("../../db");
const { data } = require("../../utils/data");

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    const productFoundData = data.find(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );

    if (productFoundData) {
      return res.json(productFoundData);
    } else {
      const productFoundDb = await ProductsName.findOne({
        where: { name: name.toLowerCase() },
      });
      if (productFoundDb) {
        return res.json(productFoundDb);
      } else {
        return res.status(404).json({ error: "Product not found" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getByName };


