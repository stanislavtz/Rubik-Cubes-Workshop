const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [],
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: []
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;