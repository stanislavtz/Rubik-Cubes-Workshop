const router = require('express').Router();
const { create, getCubeById, updateCube } = require('../services/cubeService');
const { getAllAccessories, getAccessoryById, updateAccessory } = require('../services/accessoryService');

const renderCreateCubePage = (req, res) => res.render('cube/create');

const renderCubeDetailsPage = async (req, res) => {
    const id = req.params.id;
    const cube = await getCubeById(id).populate('accessories');

    res.render('cube/details', { ...cube, accessories: cube.accessories })
}

const createCube = (req, res) => {
    const { name, imageUrl, description, difficulty } = req.body;
    const cube = { name, imageUrl, description, difficulty }

    create(cube)
        .then(res.redirect('/'))
        .catch(err => console.log(err));
}

let cube;
const renderCubeAttachAccessoryPage = async (req, res) => {
    try {
        const id = req.params.id;
        cube = await getCubeById(id).populate('accessories');
        const accessories = await getAllAccessories();
        
        const notAttached = accessories.filter(acc => !acc.cubes.map(a => a.toString()).includes(cube._id.toString()));

        res.render('cube/attach', { ...cube, accessories: notAttached });
    } catch (error) {
        console.error(error);
    }
}

const attachAccessory = async (req, res) => {
    try {
        const accessoryId = req.body.accessory;
        const accessory = await getAccessoryById(accessoryId);

        cube.accessories.push(accessory._id);
        accessory.cubes.push(cube._id);

        await updateCube(cube._id, cube);
        await updateAccessory(accessory._id, accessory);

        res.redirect(`/`);
    } catch (error) {
        console.error(error);
    }
}

router.get('/create', renderCreateCubePage);
router.get('/:id/details', renderCubeDetailsPage);
router.get('/:id/attach', renderCubeAttachAccessoryPage);

router.post('/create', createCube);
router.post('/:id/attach', attachAccessory);

module.exports = router;