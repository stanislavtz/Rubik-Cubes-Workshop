const { AUTH_COOKIE_NAME, SECRET } = require("../utils/constants");
const { jwtPromise } = require("../utils/promises");

exports.auth = (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
    if(!token) {
        next();
    }

    jwtPromise.verify(token, SECRET, (err, decoded) => {
        console.log('USER', decoded);
        req.user = decoded;
        next();
    })
}