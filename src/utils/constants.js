const CUBICLE_DB_PASS = '';

exports.connectionString = 'mongodb://localhost:27017/cubicle';

exports.cloudConnectionString = `mongodb+srv://stanislavtz:${CUBICLE_DB_PASS}@cubicle0.hmntl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

exports.SECRET = '';

exports.AUTH_COOKIE_NAME = '#user-auth-token';
