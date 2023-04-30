const { Product } = require("../../db");

const getByCategory = async (req, res) => {
    try {
        const {category} = req.params
        let allProducts = await Product.findAll();
        allProducts = allProducts.filter((product)=>(product.category === category.toLowerCase()) )
        res.json(allProducts)

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getByCategory };