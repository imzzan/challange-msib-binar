const { dataCars } = require("../model/cars.js");

// Create new car
const createCar = (req, res) => {
  try {
    const id = Math.round(Math.random() * 123456789);
    const { rentPerDay, capacity, desc, availableAt } = req.body;
    const images = req.file.path;

    if (!rentPerDay || !capacity || !desc || !availableAt || !images) {
      return res
        .status(400)
        .json({ message: "Please masukan data dengan benar" });
    }

    dataCars.push({ id, rentPerDay, capacity, desc, availableAt, images });
    const newData = { id, rentPerDay, capacity, desc, availableAt, images };
    res.status(201).json({ message: "Create data successfully", newData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all cars
const getCars = (req, res) => {
  try {
    res.status(200).json({
      message: "Get All Data Car Successfully",
      dataCars,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get cars by id
const getCarById = (req, res) => {
  try {
    const id = req.params.id;
    const getCarById = dataCars.find((item) => item.id === Number(id));
    res
      .status(200)
      .json({ message: "Get Data Car By Id Successfully", getCarById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update cars
const updateCar = (req, res) => {
  try {
    const id = req.params.id;
    const newId = Math.round(Math.random() * 123456789);
    const { rentPerDay, capacity, desc, availableAt } = req.body;
    const images = req.file.path;
    const getCarById = dataCars.find((item) => item.id === Number(id));
    getCarById.id = newId;
    getCarById.rentPerDay = rentPerDay;
    getCarById.capacity = capacity;
    getCarById.desc = desc;
    getCarById.availableAt = availableAt;
    getCarById.images = images;
    res
      .status(201)
      .json({ message: "Update Data Car Successfully", getCarById });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete cars
const deleteCar = (req, res) => {
  try {
    const id = req.params.id;
    const deleteCar = dataCars.filter((item) => item.id !== Number(id));
    res
      .status(200)
      .json({ message: "Delete Data Car Successfully", deleteCar });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar };
