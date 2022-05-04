const express = require('express');

const env = process.env.NODE_ENV || 'development';
const port = require('./config/config')[env].port;

const app = express();

require('./config/express')(app);
require('./config/handlebars')(app);

app.listen(port, console.log.bind(console, `Server is running on http://localhost:${port}`));