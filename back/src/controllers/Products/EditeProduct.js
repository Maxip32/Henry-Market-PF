const {ProductsName} = require("../../db");

const editeProducts = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, image, price, colors, size, category, description, stock, deleted} =
            req.body;

        const productFound = await ProductsName.findByPk(id);
        if (!productFound) throw new Error("Product not created in DB")

        const [rowsUpdated, [updatedProduct]] = await ProductsName.update(
            {
                name,
                image,
                price,
                colors,
                size,
                category,
                description,
                stock,
                deleted,
            },
            {
                where: {id},
                returning: true,
            }
        );

        if (rowsUpdated !== 1) {
            return res.status(404).json({error: "Product not found"});
        }

        return res.json({success: true, product: updatedProduct});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {editeProducts};
