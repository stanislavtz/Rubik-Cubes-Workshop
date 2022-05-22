const { create, getCubeById, updateCube, deleteCube } = require('../services/cubeService');
const { getNotAttachedAccessories, getAccessoryById, updateAccessory } = require('../services/accessoryService');

const renderCreateCubePage = (req, res) => res.render('cube/create');

const renderCubeDetailsPage = async (req, res) => {
    const cube = await getCubeById(req.params.cubeId).populate('accessories');
    
    let isCubeOwner = cube.ownerId == req.user?._id;
   
    res.render('cube/details', { ...cube, isCubeOwner });
}

const renderCubeAttachAccessoryPage = async (req, res) => {
    try {
        const cube = await getCubeById(req.params.cubeId);
        const accessories = await getNotAttachedAccessories(cube.accessories);

        let isCubeOwner = false;
        if (cube.ownerId == req.user?._id) { isCubeOwner = true; }

        res.render('cube/attach', { ...cube, accessories, isCubeOwner });
    } catch (error) {
        console.error(error);
    }
}

const renderEditCubePage = async (req, res) => {
    const cube = await getCubeById(req.params.cubeId);

    res.render('cube/edit', { ...cube });
}

const renderDeleteCubePage = async (req, res) => {
    const cube = await getCubeById(req.params.cubeId);

    res.render('cube/delete', { ...cube });
}

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const ownerId = req.user._id;
    const cube = { name, imageUrl, description, difficulty, ownerId };

    create(cube)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
}

const attachAccessory = async (req, res) => {
    try {
        const cube = await getCubeById(req.params.cubeId);
        const accessory = await getAccessoryById(req.body.accessory);

        cube.accessories.push(accessory);
        accessory.cubes.push(cube._id);

        await updateCube(cube._id, cube);
        await updateAccessory(accessory._id, accessory);

        renderCubeDetailsPage(req, res);
    } catch (error) {
        console.error(error);
    }
}

const editCube = async (req, res) => {
    try {
        const cube = await getCubeById(req.params.cubeId).populate('accessories');
        const updatedCube = { ...cube, ...req.body }
        await updateCube(cube._id, updatedCube);

        res.render('cube/details', { ...updatedCube, isCubeOwner: true });
    } catch (error) {
        console.error(error);
    }
}

const removeCube = async (req, res) => {
    await deleteCube(req.params.cubeId);
    res.redirect('/');
}

const controller = {
    createCube,
    editCube,
    attachAccessory,
    renderCreateCubePage,
    renderCubeDetailsPage,
    renderEditCubePage,
    renderCubeAttachAccessoryPage,
    renderDeleteCubePage,
    removeCube
}

module.exports = controller;