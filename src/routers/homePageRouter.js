const router = require('express').Router();
const {
    renderHomePage,
    renderAboutPage,
    renderSearchResult
} = require('../controllers/homePageController');

router.get('/', renderHomePage);
router.get('/about', renderAboutPage);
router.get('/search', renderSearchResult);

module.exports = router;
