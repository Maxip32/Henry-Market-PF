const { Favorite } = require('../../db');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        const favToDelete = await Favorite.findByPk(id);
        if(favToDelete){
            favToDelete.destroy();
            return res.status(200).json(favToDelete);
        }
        res.status(400).json({msg: "No se encontro el favorito con el ID enviado"});
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

module.exports = deleteFav;