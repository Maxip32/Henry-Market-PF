const express = require('express')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require("./routes/index");
const cors = require('cors')

require('./db');
const {errorHandler} = require("./middlewares/error.middleware");
const helmet = require("helmet");

const server = express();
server.name = 'API';

server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use(morgan('dev'));

/*server.use(
    helmet({
        hsts: {
            maxAge: 31536000,
        },
        contentSecurityPolicy: {
            useDefaults: false,
            directives: {
                "default-src": ["'none'"],
                "frame-ancestors": ["'none'"],
            },
        },
        frameguard: {
            action: "deny",
        },
    })
);*/
server.use((req, res, next) => {
    res.contentType("application/json; charset=utf-8");
    next();
});
 server.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
     res.header('Access-Control-Allow-Credentials', 'true');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
     next();
 });

server.use('/', routes);
server.use(errorHandler)

// Error catching endware.
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;  
