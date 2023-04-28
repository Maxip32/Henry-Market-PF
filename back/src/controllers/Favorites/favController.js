var favs = require('../../utils/favs');
const { Favorite } = require('../../db');

const addFav = (req, res) => {
    let prod = req.body;
    if (prod && favs.push(prod)) res.status(200).json(prod);
    else res.status(500).json({ error: "Error POST FAV" });
  };
  const getFavs = async (req, res) => {
    try {
        const allFavorites = await Favorite.findAll();
        res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};
  const deleteFav = (req, res) => {
    let { id } = req.params;
    if (id >= 0) {
      favs = favs.filter((e) => e.id !== Number(id));
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: "Error DELETE FAV" });
    }
  };
  
  module.exports = { addFav, getFavs, deleteFav };