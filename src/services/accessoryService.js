const Accessory = require('../models/Accessory');

const create = (accessory) => Accessory.create(accessory);

const getAllAccessories = () => Accessory.find().lean();

const getAccessoryById = (id) => Accessory.findById(id).lean();

module.exports = {
    create,
    getAllAccessories,
    getAccessoryById
}