const { Product } = require("../../db");

const getByName = async (req, res) => {

    try {
        const {name} = req.params
        const product = await Product.findOne({ where: { name: name.toLowerCase() } });
        res.json(product)

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getByName };