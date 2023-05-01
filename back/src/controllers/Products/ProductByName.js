const { ProductsName } = require("../../db");

const getByName = async (req, res) => {

    try {
        const {name} = req.params
        const product = await ProductsName.findOne({ where: { name: name.toLowerCase() } });
        res.json(product)

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getByName };


// const { getApiData, getDbData } = require('./saveData.js');

// const getByName = async (name) => {
//     if(!name) throw new Error('No prodcut found');
//     if(name.charAt(0) === name.charAt(0).toUpperCase()){
//         //Si el primer caracter es mayuscula
//         if(name.charAt(1) === name.charAt(1).toUpperCase()){
//             //Si el segundo tambien es mayuscula
//             name = name.toLowerCase()
//             //Lo paso todo a minuscula
//             name = (name.charAt(0)).toUpperCase() + name.slice(1)
//             //Paso a mayuscula el primer caracter
//         }
//     };
//     if(name.charAt(0) === name.charAt(0).toLowerCase()){
//         //Si el primer caracter es minuscula
//         name = (name.charAt(0)).toUpperCase() + name.slice(1);
//         //Paso a mayuscula el primer caracter
//     };
//     const resApi = await getApiData();
//     const resDb = await getDbData();
//     const data = resApi.concat(resDb);
//     if(data.length === 0){
//         throw new Error('No product found')
//     };
//     const product = data.filter((a) => a.name.toLowerCase() === name.toLowerCase());
//     if (product.length){
//         return product;
//     } else {
//         throw new Error('Product not found')
//     };
// };

// module.exports = { getByName };
