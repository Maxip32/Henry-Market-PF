const {ProductsName} = require("../../db");

const deleteProducts = async (req, res) => {
    try {
        const {id} = req.params

        const productFound = await ProductsName.findByPk(id);
        if (!productFound) throw new Error("Product not created in DB")

        const [rowsUpdated, [updatedProduct]] = await ProductsName.update({deleted: true}, {
                where: {id},
                returning: true,
            }
        );

        if (rowsUpdated !== 1) {
            return res.status(404).json({error: "Product not found"});
        }

        return res.json({success: true, product: updatedProduct});
        // comment for test delete products, updated deleted instead of deleted
        /*        const productDeleted = await ProductsName.destroy({where: {id}});

                if (productDeleted === 1) {
                    return res.status(200).json("Product deleted")
                } else {
                    throw new Error("An error has occurred")
                }*/

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
};

module.exports = {deleteProducts};