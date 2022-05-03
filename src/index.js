const express = require('express');

const app = express();

require('./config/express')(app);
require('./config/handlebars')(app);