const axios = require('axios');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dsdsit7gk",
    api_key: "655469967346251",
    api_secret: "DSSC-5A70hjrDgdH8JYxDBN9klA"
});

const uploadImage = async (imagePath) => {
    try {
        const res = cloudinary.uploader.upload('imagePath', {public_Id: 'imageName'});
        console.log(res);
        return res.public_id;
    } catch (error) {
        console.error(error);
    }
}
const getAssetInfo = async () => {
    try {
        const result = await cloudinary.api.resources({max_results: 500})
        // res es un array de objetos con la propiedad url y url_secure que nos interesan
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

//! Info API (cloudinary supongo)
const getApiData = async () => {
    try {
        let products = [];
        let apiData = await axios(/*CLOUDINARY*/);
        products.push(apiData);
        products = (await Promise.all(products)).map((a) => a.data.map((res) => {
            return {
                id: res.id,
                image: res.image,
            }
        }));
        let allProducts = [];
        products.map((a) => {
            allProducts = allProducts.concat(a)
        });
        return allProducts
    } catch (error) {
        return {error: error.message}
    }
};
//! Info de la DB
const getDbData = async () => {
    const res = Products.finAll({
        include: {}
    })
    return res
};

module.exports = {getApiData, getDbData};
