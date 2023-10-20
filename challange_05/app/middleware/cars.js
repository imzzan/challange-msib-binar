const carsServices = require("../services/cars.js");

const checkCarId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cayById = await carsServices.getCarById(id);
    if (!cayById) {
      return res.status(400).json({
        status: "FAIL",
        message: "Car not found",
      });
    }
    req.carById = cayById;
    next();
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: error.message,
    });
  }
};

module.exports = { checkCarId };
