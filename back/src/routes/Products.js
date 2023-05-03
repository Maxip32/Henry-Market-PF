const productsRouter = require("express").Router();

const {
  getAllProducts,
  getProductById,
} = require("../controllers/Products/AllProducts");
const {
  getByCategoryInData,
} = require("../controllers/Products/ProductByCategory");
const {
  // getByName,
  getByNameInData,
} = require("../controllers/Products/ProductByName");
const { createProducts } = require("../controllers/Products/CreateProducts");
const { deleteProducts } = require("../controllers/Products/DeleteProducts");
const { editeProducts } = require("../controllers/Products/EditeProduct");

productsRouter.get("/", getAllProducts);

productsRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const result = await getByNameInData(name);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

productsRouter.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const result = await getByCategoryInData(category);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// productsRouter.get('/category/:category', getByCategory);
// productsRouter.get('/name/:name', getByName);

productsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getProductById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// productsRouter.post('/', createProducts);
// productsRouter.delete('/:id', deleteProducts);
// productsRouter.put('/', editeProducts);

module.exports = productsRouter;