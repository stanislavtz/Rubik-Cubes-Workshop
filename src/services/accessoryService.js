const Accessory = require('../models/Accessory');

const create = (accessory) => Accessory.create(accessory);

module.exports = {
    create,
}