const { ProductsName } = require("../../db");

const getByCategory = async (req, res) => {
    try {
        const {category} = req.params
        let allProducts = await ProductsName.findAll();
        allProducts = allProducts.filter((product)=>(product.category === category.toLowerCase()) )
        res.json(allProducts)

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }

};

module.exports = { getByCategory };



// const { getApiData, getDbData } = require('./saveData');

// const getByCategory = async (category) => {
//     if(!category) throw new Error('Please select a category');
//     if(category.charAt(0) === category.charAt(0).toUpperCase()){
//         if(category.charAt(1) === category.charAt(1).toUpperCase()){
//             category = category.toLowerCase();
//             category = (category.charAt(0)).toUpperCase() + category.slice(1);
//         }
//     };
//     if(category.charAt(0) === category.charAt(0).toLowerCase()){
//         category = (category.charAt(0)).toUpperCase() + category.slice(1);
//     };
//     const resApi = await getApiData();
//     const resDb = await getDbData();
//     const data = resApi.concat(resDb);
//     if(data.length === 0){
//         throw new Error('No category found')
//     };
//     const resultado = data.filter((a) => a.category.toLowerCase() === category.toLowerCase());
//     if(resultado.length){
//         return resultado
//     } else {
//         throw new Error('Category not found')
//     }
// };

// module.exports = { getByCategory };