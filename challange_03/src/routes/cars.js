const express = require('express');
const { verifyId } = require('../middleware/findById.js');
const { getCars, getCarById, createCar, updateCar, deleteCar } = require('../controller/cars.js');
const upload = require('../middleware/multer.js');

const router = express.Router();

router.post('/', upload.single('images'), createCar)
router.get('/', getCars);
router.get('/:id', verifyId, getCarById);
router.put('/:id', verifyId, upload.single('images'), updateCar);
router.delete('/:id', verifyId, deleteCar);

module.exports = router;