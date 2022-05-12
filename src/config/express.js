const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const routes = require('../routes');
const { auth } = require('../middlewares/authNiddleware');

function configExpress(app) {
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(auth);
    app.use(routes);
}

module.exports = configExpress;