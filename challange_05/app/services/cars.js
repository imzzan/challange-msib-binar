const ApplicationError = require("../../error/ApplicationError.js");
const carsRepo = require("../repositories/cars.js");
const fs = require("fs");

exports.createCar = async (body) => {
  try {
    const car = await carsRepo.create(body)
    return car
  } catch (error) {
    throw new ApplicationError(
      `Failed to create new car: ${error.message}`,
      500
    );
  }
};


exports.getAllCars = async () => {
  try {
    const cars = await carsRepo.findCarsAll();
    return cars
  } catch (error) {
    throw new ApplicationError(`Failed to get all cars: ${error.message}`, 500);
  }
}

exports.getCarById = async (id) => {
  try {
    const car = await carsRepo.findCarById(id);
    return car;
  } catch (error) {
    throw new ApplicationError(`Failed to get car by id: ${error.message}`, 500);
  }
}

exports.updateCar = async (body, id) => {
  try {
    const car = await carsRepo.updateCar(body, id);
    return car;
  } catch (error) {
    throw new ApplicationError(`Failed to update car: ${error.message}`, 500);
  }
}


exports.deleteCar = async (id) => {
  try {
    const car = await carsRepo.deleteCar(id);
    return car;
  } catch (error) {
    throw new ApplicationError(`Failed to delete car: ${error.message}`, 500);
  }
}

exports.deleteImage = (image) => {
  try {
    const fileImage = `./public/${image}`;
    fs.unlinkSync(fileImage);
    return fileImage;
  } catch (error) {
    throw new ApplicationError(`Failed delete image: ${error.message}`, 500);
  }
}