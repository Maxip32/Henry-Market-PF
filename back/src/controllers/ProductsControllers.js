//const { Products } = require("../db");
const {Products} = require("../utils/Products");

const getAllProducts = async () => {
  const dbProducts = await Products.findAll();
  const utilsProducts = dbProducts.map((product) => {
    return {
      id: product.id,
      name: product.name.toLowerCase(),
      colors: product.colors,
      price: product.price,
      image: product.imageurl,
      category: product.category,
      description: product.description
    };
  });
  const allProducts = dbProducts.concat(utilsProducts);
  console.log(allProducts);
  return allProducts;
};
module.exports = {getAllProducts}
