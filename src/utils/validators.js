exports.imageUrlValidator = {
    validator: function (v) {
        return /^http/i.test(v);
    },
    message: 'imageUrl should starts with http or https'
}
