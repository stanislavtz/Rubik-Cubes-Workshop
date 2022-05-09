const router = require('express').Router();

const cubeRouter = require('./routers/cubeRouter');
const homePageRouter = require('./routers/homePageRouter');
const accessoryRouter = require('./routers/accessoryRouter');

router.use(homePageRouter);
router.use('/cube', cubeRouter);
router.use('/accessory', accessoryRouter);

router.get('*', (req, res) => res.status(404).render('404'));

module.exports = router;