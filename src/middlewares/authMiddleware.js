const { getCubeById } = require("../services/cubeService");
const { jwtPromise } = require("../utils/promises");
const { AUTH_COOKIE_NAME, SECRET } = require("../utils/constants");

exports.auth = (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];

    if (!token) {
        return next();
    }

    jwtPromise.verify(token, SECRET)
        .then(decoded => {
            req.user = decoded;
            res.locals.user = decoded;
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(401).redirect('/login');
        });
}

exports.isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login');
    }

    next();
}

exports.isAuthorized = async (req, res, next) => {
    try {
        const cube = await getCubeById(req.params.cubeId).populate('accessories');

        if (cube.ownerId != req.user._id) {

            return res.redirect('/');
        }

        next();

    } catch (error) {
        console.error(error);
    }
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }

    next();
}