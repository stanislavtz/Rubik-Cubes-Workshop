const { create, getCubeById, updateCube } = require('../services/cubeService');
const { getAllAccessories, getAccessoryById, updateAccessory } = require('../services/accessoryService');

const renderCreateCubePage = (req, res) => res.render('cube/create');

const renderCubeDetailsPage = async (req, res) => {
    const cube = await getCubeById(req.params.id).populate('accessories');

    res.render('cube/details', { ...cube, accessories: cube.accessories })
}

const renderCubeAttachAccessoryPage = async (req, res) => {
    try {
        const cube = await getCubeById(req.params.id);
        const accessories = await getAllAccessories(cube);

        res.render('cube/attach', { ...cube, accessories });
    } catch (error) {
        console.error(error);
    }
}

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const cube = { name, imageUrl, description, difficulty }

    create(cube)
        .then(res.redirect('/'))
        .catch(err => console.log(err));
}

const attachAccessory = async (req, res) => {
    try {
        const cube = await getCubeById(req.params.id).populate('accessories');
        const accessory = await getAccessoryById(req.body.accessory);

        cube.accessories.push(accessory._id);
        accessory.cubes.push(cube._id);

        await updateCube(cube._id, cube);
        await updateAccessory(accessory._id, accessory);

        renderCubeAttachAccessoryPage(req, res);
    } catch (error) {
        console.error(error);
    }
}

const controller = {
    createCube,
    attachAccessory,
    renderCreateCubePage,
    renderCubeDetailsPage,
    renderCubeAttachAccessoryPage,
}

module.exports = controller;