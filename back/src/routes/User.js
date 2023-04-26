const userRouter = require("express").Router();

userRouter.get('/', (req, res) => {
  res.send('¡Hola desde la ruta User!');
});

module.exports = userRouter;
