const {ProductsName} = require("../../db");

const createProducts = async (req, res) => {
    try {
        const {name, price, image, category, description, stock, colors, sizes} = req.body

        const productFound = await ProductsName.findOne({where: {name: name}});
        if (productFound) throw new Error("Producto ya creado")

        const productCreated = await ProductsName.create({
            name,
            image,
            price,
            colors,
            sizes,
            category,
            description,
            stock,
            deleted: false
        });

        return res.json(productCreated);

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {createProducts};