const express = require('express');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const port = require('./config')[env].port;

function configExpress(app) {
    app.use(express.static(path.resolve(__dirname, '../static')));

    app.get('/', (req, res) => {
        res.render('home');
    });
    
    app.listen(port, console.log.bind(console, `Server is running on http://localhost:${port}`));
}



module.exports = configExpress;