const Cube = require("../models/Cube");

const getAllCubes = () => Cube.find().lean();

const getCubeById = (id) => Cube.findById(id).lean();

const create = (cube) => Cube.create(cube);

const updateCube = (id, cube) => Cube.findByIdAndUpdate(id, cube)

module.exports = {
    create,
    updateCube,
    getAllCubes,
    getCubeById,
}