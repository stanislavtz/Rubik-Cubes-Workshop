const mongoose = require('mongoose');
const { imageUrlValidator } = require('../utils/validators');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl is required'],
        validate: imageUrlValidator,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxlength: [200, 'Text length should be maximum 200 characters.'],
    },
    cubes: [{type: mongoose.Types.ObjectId, ref: 'Cube'}]
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;