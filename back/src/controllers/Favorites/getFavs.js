const { User } = require('../../db');

const getFav = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId);
        const products = await user.getProductsName();

        return res.json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
};

module.exports = {getFav};