const config = {
    development: {
        port: process.env.PORT || 5000,
    },
    production : {
        port: 80
    }
}

module.exports = config;