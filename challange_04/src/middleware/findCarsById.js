const { CarsModel } = require("../../models");

const carById = async (req, res, next) => {
  try {
    const id = req.params.id;

    const carById = await CarsModel.findByPk(id)

    if (!carById) {
      return res.status(400).json({ message: "car not found" });
    }
    req.carById = carById;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {carById}