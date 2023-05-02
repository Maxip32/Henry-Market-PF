const { Review } = require("../../db");

const allReviewsbyProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.findAll({ where: { productId } });
        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message })        
    }
};

module.exports = { allReviewsbyProduct };