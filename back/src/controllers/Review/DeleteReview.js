const { Review } = require("../../db");

const deleteReview = async (req, res) => {
    try {
        const { reviewId, productId } = req.body;
        await Review.destroy({ where: { id: reviewId, productId: productId } });
        return res.json({ message: 'Review eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({ error: error.message })        
    }
};

module.exports = { deleteReview };