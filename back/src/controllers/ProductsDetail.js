
 
 /*const { Products } = require("../utils/Products");
 const productsController = require("./ProductsControllers");
 
 const getAllProducts = async (req, res) => {
   try {
     // Obtener todos los productos de la base de datos
     let allProductsDB = await ProductsName.findAll();
     
     // Obtener todos los productos del controlador
     let allProductsController = await productsController.getAllProducts();
     
     // Unir los resultados y enviarlos en la respuesta
     let allProducts = [...allProductsDB, ...allProductsController];
     return res.json(allProducts);
   } catch (error) {
     return res.status(500).json({ error: error.message });
   }
 };
 
 module.exports = { getAllProducts };*/

 /*const { products } = require('../../utils/Products');
const { ProductsName } = require("../../db");

const getAllProducts = async (req, res) => {
    try {
        let allProducts = await ProductsName.findAll();
        return  res.json([...products, ...allProducts]) ;
    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }
};

module.exports = { getAllProducts };
 */