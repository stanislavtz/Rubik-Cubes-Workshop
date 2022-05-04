const express = require('express');

const path = require('path');
const routes = require('../routes');

function configExpress(app) {
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({ extended: true }));
    app.use(routes);
}

module.exports = configExpress;