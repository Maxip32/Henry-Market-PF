const {Review} = require("../../db");

const deleteReview = async (req, res) => {
    try {
        const {reviewId, productId} = req.body;

        const reviewFound = await Review.findByPk(reviewId);

        if (!reviewFound) throw new Error("Review not created in DB")

        const [rowsUpdated, [updatedReview]] = await Review.update({deleted: true}, {
            where: {
                id: reviewId,
                products_name_id: productId
            }, returning: true
        });

        if (rowsUpdated !== 1) {
            return res.status(404).json({error: "Product not found"});
        }

        return res.json({message: 'Review eliminada correctamente'});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {deleteReview};