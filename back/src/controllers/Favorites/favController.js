var favs = require('../../utils/favs');

const addFav = (req, res) => {
    let prod = req.body;
    if (prod && favs.push(prod)) res.status(200).json(prod);
    else res.status(500).json({ error: "Error POST FAV" });
  };
  
  const getFavs = (req, res) => {
    if (favs) res.status(200).json(favs);
    else res.status(500).json({ error: "Error GET FAVS" });
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