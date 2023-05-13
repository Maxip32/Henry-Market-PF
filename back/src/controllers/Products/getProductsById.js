const {ProductsName} = require("../../db");
const {data} = require("../../utils/data")

const getProductById = async (req, res) => {
    try {
        const {id} = req.params

        const productFoundDb = await ProductsName.findByPk(id);
        return res.status(200).json(productFoundDb)
        // comment for test new route createProductsFromData - http://localhost:3001/products/create/data
        /*const productFoundData = data.find(p => p.id == id)
        console.log(id)
        console.log(productFoundData)
        
        if(productFoundData){
            return res.status(200).json(productFoundData)
        }
        else{
            const productFoundDb = await ProductsName.findByPk(id);
            return res.status(200).json(productFoundDb)
        }*/

    } catch (error) {
        return res.status(404).json({error: error.message})
    }

};

module.exports = {getProductById};