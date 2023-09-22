let { dataCars } = require("../model/cars.js");
const { v4: uuidv4 } = require("uuid");

// Create new car
const createCar = (req, res) => {
  try {
    const id = uuidv4();
    const { rentPerDay, capacity, description, availableAt } = req.body;
    const images = req.file.path;

    if (!rentPerDay || !capacity || !description || !availableAt || !images) {
      return res
        .status(400)
        .json({ message: "Please masukan data dengan benar" });
    }

    dataCars.push({
      id,
      rentPerDay,
      capacity,
      description,
      availableAt,
      images,
    });
    const newData = {
      id,
      rentPerDay,
      capacity,
      description,
      availableAt,
      images,
    };
    res
      .status(201)
      .json({ message: "Create data successfully", data: newData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all cars
const getCars = (req, res) => {
  try {
    res.status(200).json({
      message: "Get All Data Car Successfully",
      data: dataCars,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get cars by id
const getCarById = (req, res) => {
  try {
    const getCarById = req.currentCar;
    res
      .status(200)
      .json({ message: "Get Data Car By Id Successfully", data: getCarById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update cars
const updateCar = (req, res) => {
  try {
    const { rentPerDay, capacity, description, availableAt } = req.body;
    const images = req.file.path;
    const getCarById = req.currentCar;
    getCarById.rentPerDay = rentPerDay;
    getCarById.capacity = capacity;
    getCarById.description = description;
    getCarById.availableAt = availableAt;
    getCarById.images = images;
    res
      .status(201)
      .json({ message: "Update Data Car Successfully", data: getCarById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete cars
const deleteCar = (req, res) => {
  try {
    const id = req.currentCar.id;
    const deleteCar = dataCars.filter((item) => item.id !== id);
    dataCars = deleteCar;
    res.status(200).json({ message: "Delete Data Car Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar };
