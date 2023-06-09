const {ProductsName, Review} = require("../../db");

const createReview = async (req, res) => {
    try {
        const {title, body, rating, productId} = req.body;
        const product = await ProductsName.findByPk(productId);

        const review = await Review.create({
            title: title,
            body: body,
            rating: rating,
            products_name_id: product.id,
            deleted: false
        });
        return res.json({review});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {createReview};