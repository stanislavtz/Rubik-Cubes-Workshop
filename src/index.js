const express = require('express');
const dbConnect = require('./config/database');

const env = process.env.NODE_ENV || 'development';
const port = require('./config/config')[env].port;

const app = express();

dbConnect()
    .then(() => {
        console.log('Database is connected!');
        require('./config/express')(app);
        require('./config/handlebars')(app);
        app.listen(port, console.log.bind(console, `Server is running on http://localhost:${port}`));
    })
    .catch(err => console.error(err));