const axios = require('axios');
import cloudynaryConfig from "../../configs/cloudynaryConfig";

const cloudinary = require('cloudinary').v2;

const uploadImage = async (imagePath) => {
    try {
        const res = cloudinary.uploader.upload('imagePath', {public_Id: 'imageName'});
        console.log(res);
        return res.public_id;
    } catch (error) {
        console.error(error);
    }
}
const getAssetInfo = async (publicId) => {
    try {
        // Get details about the asset
        const reult = await cloudinary.url('imageName', {width: 200, height: 200});
        console.log(result);
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