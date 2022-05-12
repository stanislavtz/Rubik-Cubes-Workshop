const { AUTH_COOKIE_NAME, SECRET } = require("../utils/constants");
const { jwtPromise } = require("../utils/promises");

exports.auth = (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
    if(!token) {
       return next();
    }

    return jwtPromise.verify(token, SECRET, (err, decoded) => {
        req.user = decoded;
        res.locals.user = decoded;
        next();
    });
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.user) {
        return next();
    }

    return req.user;
}

exports.isAuthorized = (req, res, next) => {

}

exports.isGuest = (req, res, next) => {
    if(req.user) {
        return next();
    }

    return undefined;
}