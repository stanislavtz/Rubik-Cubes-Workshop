const router = require('express').Router();
const { getAllAccessories, getAccessoryById } = require('../services/accessoryService');
const { create, getCubeById } = require('../services/cubeService');

const renderCreateCubePage = (req, res) => res.render('cube/create');

const renderCubeDetailsPage = (req, res) => {
    const id = req.params.id;
    getCubeById(id)
        .then(cube => res.render('cube/details', { ...cube }))
        .catch(err => console.error(err));

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
        cube = await getCubeById(id);
        const accessories = await getAllAccessories();
        const notAttached = accessories.filter(a => !a.cubes.includes(cube._id));

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