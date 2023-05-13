const {User, ProductsName} = require('../../db');

const addFav = async (req, res) => {
    try {
        const {userId, productId} = req.body;

        const user = await User.findByPk(userId);
        const product = await ProductsName.findByPk(productId);
        await user.addProductsName(product);

        return res.json({message: 'Producto agregado a favoritos correctamente'});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {addFav};