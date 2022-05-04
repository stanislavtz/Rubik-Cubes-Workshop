const router = require('express').Router();
const { getAll } = require('../services/cubeService');

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/search', renderSearchResult);

async function renderHomePage(req, res) {
    try {
        const cubes = await getAll();
        res.render('home', { cubes })
    } catch (error) {
        console.error(error);
    }
}

async function renderSearchResult(req, res) {
    let result = await getAll();

    if (req.query.search) {
        result = result.filter(r =>
            r.name.toLowerCase().includes(req.query.search.toLowerCase()));
    }

    if (req.query.from) {
        result = result.filter(r => Number(r.difficulty) >= Number(req.query.from));
    }

    if (req.query.to) {
        result = result.filter(r => Number(r.difficulty) <= Number(req.query.to));
    }

    console.log('result', result)

    if (result.length > 0) {

        return res.render('home', { cubes: result });
    }

    return res.redirect('/');
}

function renderAboutPage(req, res) {
    res.render('about');
}

module.exports = router;