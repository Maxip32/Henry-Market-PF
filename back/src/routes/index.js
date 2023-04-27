
const { Router } = require("express");
const { getAllProducts } = require('../controllers/Products/AllProducts');
const { getByCategory } = require('../controllers/Products/ProductByCategory');
const { getByName } = require('../controllers/Products/ProductByName')

const productsRouter = require("./Products");
const userRouter = require("./User");
const shoppingCartRouter = require("./ShoppingCartRoute");

const router = Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/shoppingCart", shoppingCartRouter);

router.get('/allproducts', async (req, res) => {
    try {
        const allProds = await getAllProducts();
        res.status(200).json(allProds)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});
router.get('/products/name', async (req, res) => {
    //* Para buscar en Thunder ==> parameter name ---- value = nombre producto
    const { name } = req.query;
    try {
        const result = await getByName(name);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});
router.get('/products/category', async (req, res) => {
    const { category } = req.query;
    try {
        const result = await getByCategory(category);
        return res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
});


module.exports = router;
