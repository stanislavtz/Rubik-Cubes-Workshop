const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubeRouter = require('./routers/cubeRouter');
const accessoryController = require('./controllers/accessoryController');

router.use(homeController);
router.use('/cube', cubeRouter);
router.use('/accessory', accessoryController);
router.get('*', (req, res) => res.render('404'));

module.exports = router;