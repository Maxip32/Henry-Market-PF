const {ProductsName} = require("../../db")
const {data} = require("../../utils/data");

const createProductsFromData = async (req, res) => {
    try {
        const formatProductsData = data.map(item => {
            return {
                name: item.name,
                description: item.description,
                price: item.price,
                colors: item.colors,
                sizes: item.sizes,
                image: item.image,
                category: item.category,
                stock: item.stock,
                deleted: false
            }
        })

        const productsFromData = await ProductsName.bulkCreate(formatProductsData)

        return res.json(productsFromData);

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {createProductsFromData};
