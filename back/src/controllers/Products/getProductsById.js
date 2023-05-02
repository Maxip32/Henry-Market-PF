const { ProductsName } = require("../../db");
const { data } = require("../../utils/data")

const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const productFoundData = data.find(p => p.id == id)
        console.log(id)
        console.log(productFoundData)
        
        if(productFoundData){
            return res.json(productFoundData)
        }
        else{
            const productFoundDb = await ProductsName.findByPk(id);
            return res.json(productFoundDb)
        }

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getProductById };