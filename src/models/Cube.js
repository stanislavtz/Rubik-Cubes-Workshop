const mongoose = require('mongoose');
const { imageUrlValidator } = require('../utils/validators');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: true,
        maxlength: [500, 'Text length should be maximum 500 characters.']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: imageUrlValidator
    },
    difficulty: {
        type: Number,
        required: true,
        min: [1, 'Difficulty level should be greater than or equal to 1'],
        max: [6, 'Difficulty level should be less than or equal to 6'],
    },
    accessories: [{ type: mongoose.Types.ObjectId, ref: 'Accessory' }],
    ownerId : {
        type: String,
        required: true,
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;