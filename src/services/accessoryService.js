const Accessory = require('../models/Accessory');

const getAllAccessories = () => Accessory.find().lean();

const getNotAttachedAccessories = (collection) => Accessory.find().where('_id').nin(collection).lean();

const getAccessoryById = (id) => Accessory.findById(id).lean();

const create = (accessory) => Accessory.create(accessory);

const updateAccessory = (id, accessory) => Accessory.findByIdAndUpdate(id, accessory);

module.exports = {
    create,
    updateAccessory,
    getAccessoryById,
    getAllAccessories,
    getNotAttachedAccessories
}