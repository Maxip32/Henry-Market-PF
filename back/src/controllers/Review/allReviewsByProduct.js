const {Review} = require("../../db");

const allReviewsByProduct = async (req, res) => {
    try {
        const {productId} = req.params;

        const reviews = await Review.findAll({where: {products_name_id: productId}});
        return res.json({reviews});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {allReviewsByProduct};
