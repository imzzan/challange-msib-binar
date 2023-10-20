const express = require('express');
const { createCar, getAllCars, getCarById, updateCar, deleteCar,  } = require('../controllers/cars.js');
const {userAuthorized, onlyAdminAndSuperAdnmin} = require('../middleware/auth.js');
const {checkCarId} = require('../middleware/cars.js')
const {upload} = require('../middleware/multer.js')

const router = express.Router();

router.post('/', userAuthorized, onlyAdminAndSuperAdnmin, upload.single('image'),  createCar);
router.get('/', userAuthorized, getAllCars);
router.get('/:id', userAuthorized, checkCarId, getCarById);
router.put('/:id', userAuthorized, onlyAdminAndSuperAdnmin, checkCarId, upload.single('image'), updateCar);
router.delete('/:id', userAuthorized, onlyAdminAndSuperAdnmin, checkCarId, deleteCar)

module.exports = router;