const carsServices = require('../services/cars.js')

const createCar = async (req, res) => {
  try {
    const { name, rentPerDay, capacity, description, availableAt, type } = req.body
    const image = req.file.path
    const imageName = image.replace('public\\', '')
    const image_url = `${req.protocol}://${req.get('host')}/${imageName}`
    const userId = req.userId

    const body = {
      name,
      rentPerDay,
      capacity,
      description,
      availableAt,
      type,
      image: imageName,
      // eslint-disable-next-line camelcase
      image_url,
      createdBy: userId
    }

    const response = await carsServices.createCarServices(body)

    res.json({
      status: 'OK',
      message: 'Success',
      data: response
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const getAllCars = async (req, res) => {
  try {
    const response = await carsServices.getAllCars()
    res.json({
      status: 'OK',
      message: 'Success',
      data: response
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const getCarById = async (req, res) => {
  try {
    const response = req.carById
    res.json({
      status: 'OK',
      message: 'Success',
      data: response
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const updateCar = async (req, res) => {
  try {
    const { name, rentPerDay, capacity, description, availableAt, type } =
      req.body
    const image = req.file.path
    const imageName = image.replace('public\\', '')
    const image_url = `${req.protocol}://${req.get('host')}/${imageName}`
    const userId = req.userId
    const id = req.carById.id
    const currentImage = req.carById.image
    let newImage

    if (req.file == null) {
      newImage = currentImage
    } else {
      newImage = imageName
    }

    const body = {
      name,
      rentPerDay,
      capacity,
      description,
      availableAt,
      type,
      image: newImage,
      image_url,
      updatedBy: userId
    }
    const [_, response] = await carsServices.updateCarServices(body, id)
    carsServices.deleteImage(currentImage)

    res.json({
      status: 'OK',
      message: 'Success updated',
      data: response
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

const deleteCar = async (req, res) => {
  try {
    const userId = req.userId
    const id = req.carById.id
    const currentImage = req.carById.image
    await carsServices.updateCarServices({ deletedBy: userId }, id)
    await carsServices.deleteCar(id)
    carsServices.deleteImage(currentImage)
    res.json({
      status: 'OK',
      message: 'Success deleted'
    })
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      message: error.message
    })
  }
}

module.exports = { createCar, getAllCars, getCarById, updateCar, deleteCar }
