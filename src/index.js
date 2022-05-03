const app = require('./config/express');
require('./config/handlebars')(app);

app.get('/', (req, res) => {
    res.render('home');
});