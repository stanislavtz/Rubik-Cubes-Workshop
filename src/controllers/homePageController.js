const { getAllCubes } = require('../services/cubeService');

async function renderHomePage(req, res) {
    try {
        const cubes = await getAllCubes();
        res.render('home', { cubes })
    } catch (error) {
        console.error(error);
    }
}

async function renderSearchResult(req, res) {
    let result = await getAllCubes();

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

    if (result.length > 0) {
        return res.render('home', { cubes: result });
    }

    return res.redirect('/');
}

function renderAboutPage(req, res) {
    res.render('about');
}


module.exports = {
    renderHomePage,
    renderAboutPage,
    renderSearchResult,
}