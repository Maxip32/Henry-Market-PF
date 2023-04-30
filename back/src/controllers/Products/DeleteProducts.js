const { Product } = require("../../db");

const deleteProducts = async (req, res) => {
    try {
        const {id} = req.params
        
        const productFound = await Product.findByPk(id);
        if (!productFound) throw new Error("Producto no creado en la base de datos")

        const productDeleted = await Product.destroy({ where: { id } });
        
        if(productDeleted === 1){
            return res.status(200).json("producto eliminado")
        }
        else{
            throw new Error("se produjo un error")
        }

    } catch (error) {
        return  res.status(500).json({ error: error.message })
    }
};

module.exports = { deleteProducts };