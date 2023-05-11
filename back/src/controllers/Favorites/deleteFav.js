const { User, ProductsName } = require('../../db');

const deleteFav = async (req, res) => {
    try {
        const { productId, userId } = req.body;

        const user = await User.findByPk(userId);
        const product = await ProductsName.findByPk(productId);
        await user.removeProduct(product);

        return res.json({ message: 'Producto eliminado de favoritos correctamente' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {deleteFav};