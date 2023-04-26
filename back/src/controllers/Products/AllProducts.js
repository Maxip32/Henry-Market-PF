const { getApiData, getDbData } = require('./saveData');

const getAllProducts = async () => {
    try {
        const allProductsDb = await getDbData();
        const allProductsApi = await getApiData();
        //const allProducts = allProductsApi.concat(allProductsDb);
        //! Para devolver solo los nombres de los productos cada uno como un objeto.
        // const names = allProducts.map(product => ({ name: product.name }));
        // return names;
        //! Para devolver todos los nombres en un solo objeto (tipo lista).
        // const dbNames = allProductsDb.map(product => product.name);
        // const apiNames = allProductsApi.map(product => product.name);
        // return { names: dbNames.concat(apiNames) };
        //! Para devolver todos los productos con la informacion completa.
        return allProductsApi.concat(allProductsDb);
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getAllProducts };