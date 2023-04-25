
const axios = require('axios');

//! Info API (cloudinary supongo)
const getApiData = async () => {
    try{
        let products = [];
        let apiData = await axios(/*CLOUDINARY*/);
        products.push(apiData);
        products = (await Promise.all(products)).map((a) => a.data.map((res) => {
            return{
                id: res.id,
                image: res.image,
            }
        }));
        let allProducts = [];
        products.map((a) => {
            allProducts = allProducts.concat(a)
        });
        return allProducts
    } catch(error){
        return { error: error.message}
    }
};
//! Info de la DB
const getDbData = async () => {
    const res = Products.finAll({
        include:{

        }
    })
    return res
};

module.exports = { getApiData, getDbData };