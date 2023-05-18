const server = require('./src/app');
const {conn} = require('./src/db');
const {createOrder} = require("./src/services/orders/createOrder");

// Syncing all the models at once.

conn.sync({force: true}).then(() => {
// conn.sync({ alter: true }).then(() => {
    server.listen(3001, () => {
        console.log("Server listening at 3001"); // eslint-disable-line no-console
    });
});
