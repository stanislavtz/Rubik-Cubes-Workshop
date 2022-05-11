const mongoose = require('mongoose');
const { connectionString, cloudConnectionString } = require('../utils/constants');

const dbConnect = () => mongoose.connect(cloudConnectionString);

module.exports = dbConnect;