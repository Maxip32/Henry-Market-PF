const productsRouter = require("express").Router();

productsRouter.get('/', (req, res) => {
  res.send('¡Hola desde la ruta Products!');
});

module.exports = productsRouter;
