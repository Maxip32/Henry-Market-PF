const favoriteRouter = require("express").Router();

const { getFav }  = require('../controllers/Favorites/getFavs')
const { addFav } = require('../controllers/Favorites/addFav')
const { deleteFav } = require('../controllers/Favorites/deleteFav')

favoriteRouter.get('/:userId', getFav);
favoriteRouter.post('/', addFav);
favoriteRouter.delete('/', deleteFav);

module.exports = favoriteRouter;