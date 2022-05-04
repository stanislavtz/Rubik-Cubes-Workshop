const Cube = require("../models/Cube");

const getAll = () => Cube.find().lean();

const getById = (id) => Cube.findById(id).lean();

const create = (cube) => Cube.create(cube);


module.exports = {
    create,
    getAll,
    getById,
}