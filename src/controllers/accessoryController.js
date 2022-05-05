const router = require('express').Router();
const { create } = require('../services/accessoryService');

router.get('/accessory/create', renderCreateAccessoryPage);

router.post('/accessory/create', createAccessory);

function renderCreateAccessoryPage(req, res) {
    res.render('accessory/create');
}

function createAccessory(req, res) {
    const { name, description, imageUrl } = req.body;
    const accessory = { name, imageUrl, description }

    create(accessory)
        .then(res.redirect('/'))
        .catch(err => console.error(err));
}

module.exports = router;