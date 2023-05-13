const {ProductsName} = require("../../db");
const {data} = require("../../utils/data");
const {Op} = require('sequelize');

const getByName = async (req, res) => {
    try {
        const {name} = req.params;

        const productFoundDb = await ProductsName.findOne({
            where: {
                name: {
                    [Op.iLike]: name
                }
            }
        });
        if (productFoundDb) {
            return res.json(productFoundDb);
        } else {
            return res.status(404).json({error: "Product not found"});
        }
        // coment for test new route createProductsFromData - http://localhost:3001/products/create/data
        /*const productFoundData = data.find(
          (p) => p.name.toLowerCase() === name.toLowerCase()
        );

        if (productFoundData) {
          return res.json(productFoundData);
        } else {
          const productFoundDb = await ProductsName.findOne({
            where: {
              name: {
                [Op.iLike]: name
              }
            }
          });
          if (productFoundDb) {
            return res.json(productFoundDb);
          } else {
            return res.status(404).json({ error: "Product not found" });
          }
        }*/
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {getByName};


