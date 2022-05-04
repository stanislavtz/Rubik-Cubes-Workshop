const mongoose = require('mongoose');
const { connectionString } = require('../utils/constants');

const dbConnect = () => mongoose.connect(connectionString);

module.exports = dbConnect;