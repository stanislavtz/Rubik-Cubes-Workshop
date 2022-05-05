const Cube = require("../models/Cube");

const getAllCubes = () => Cube.find().lean();

const getCubeById = (id) => Cube.findById(id).lean();

const create = (cube) => Cube.create(cube);


module.exports = {
    create,
    getAllCubes,
    getCubeById,
}