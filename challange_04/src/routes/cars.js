const express = require('express');
const { createNewCar, getAllCars, getCarById, updateCar, deleteCar } = require('../controller/cars.js');
const upload = require('../middleware/multer.js');
const { carById } = require('../middleware/findCarsById.js');
const {validasiBody} = require('../middleware/validasiBody.js');

const router = express.Router();

router.post('/', upload.single('image'), validasiBody, createNewCar);
router.get('/', getAllCars);
router.get('/:id', carById, getCarById);
router.put('/:id', upload.single('image'), validasiBody, carById, updateCar);
router.delete('/:id', carById, deleteCar);

module.exports = router;