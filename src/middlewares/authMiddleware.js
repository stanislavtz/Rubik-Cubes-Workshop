const { getCubeById } = require("../services/cubeService");
const { jwtPromise } = require("../utils/promises");
const { AUTH_COOKIE_NAME, SECRET } = require("../utils/constants");

exports.auth = (req, res, next) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
    
    if(!token) {
       return next();
    }

    return jwtPromise.verify(token, SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).redirect('/login');
        }

        req.user = decoded;
        res.locals.user = decoded;
        
        next();
    });
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.user) {
        return res.redirect('/login');
    }

    next();
}

exports.isAuthorized = async (req, res, next) => {
    try {
        const cube = await getCubeById(req.params.cubeId).populate('accessories');
        
        if(cube.ownerId == req.user._id) {
            
            return next();
        }

        res.redirect('/');
    } catch (error) {
        console.error(error);
    }
}

exports.isGuest = (req, res, next) => {
    if(req.user) {
        return res.redirect('/');
    }

    next();
}