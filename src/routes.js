const router = require('express').Router();

const cubeRouter = require('./routers/cubeRouter');
const homePageRouter = require('./routers/homePageRouter');
const accessoryRouter = require('./routers/accessoryRouter');
const userRouter = require('./routers/userRouter');

router.use(homePageRouter);
router.use('/cube', cubeRouter);
router.use('/accessory', accessoryRouter);
router.use(userRouter);

router.get('*', (req, res) => res.status(404).render('404'));

module.exports = router;