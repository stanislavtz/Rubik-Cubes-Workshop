exports.imageUrlValidator = {
    validator: function (v) {
        return /^https?/i.test(v);
    },
    message: 'imageUrl should starts with http or https'
}
