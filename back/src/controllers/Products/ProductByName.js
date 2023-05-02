const { ProductsName } = require("../../db");
const { data } = require("../../utils/data")

const getByName = async (req, res) => {

    try {
        const {name} = req.params
        const product = await ProductsName.findOne({ where: { name: name.toLowerCase() } });
        const ProductIndata = data.find(p =>p.name === name)

        if(product){ 
            return res.json(product)
        }
        else if (ProductIndata) {
            return res.json(ProductIndata)
        }
        else{
            return res.status(500).json({ error: "Product not found" })
        }

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getByName };