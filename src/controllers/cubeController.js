const router = require('express').Router();

router.get('/cube/create', (req, res) => res.render('create'));

module.exports = router;