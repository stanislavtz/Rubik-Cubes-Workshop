const util = require('util');
const jwt = require('jsonwebtoken');


exports.jwtPromise = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify)
}