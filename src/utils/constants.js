const util = require('util');
const jwt = require('jsonwebtoken');

const cubiclePass = 'mPWearFFQ1ZbESWn';

exports.connectionString = 'mongodb://localhost:27017/cubicle';

exports.cloudConnectionString = `mongodb+srv://stanislavtz:${cubiclePass}@cubicle0.hmntl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

exports.jwtPromise = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify)
}