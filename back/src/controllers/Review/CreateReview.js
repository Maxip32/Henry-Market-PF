const {ProductsName, Review} = require("../../db");
const {sendMailing} = require("../../utils/sendMailing");

const createReview = async (req, res) => {
    try {
        const {title, body, rating, productId, email} = req.body;
        const product = await ProductsName.findByPk(productId);

        const review = await Review.create({
            title: title,
            body: body,
            rating: rating,
            products_name_id: product.id,
            deleted: false
        });

        await sendMailing(email, "Review Creada", "<h1>Review Creada exitosamente gracias por su tiempo</h1>")

        return res.json({review});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {createReview};