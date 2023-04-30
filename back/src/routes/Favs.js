
const { addFav, getFavs, deleteFav } = require('../controllers/Favorites/favController');
const favRouter = require('express').Router();

favRouter.post("/", addFav);
favRouter.get("/", getFavs);
favRouter.delete("/:id", deleteFav);

module.exports = favRouter;