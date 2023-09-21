const { dataCars } = require("../model/cars.js");

const verifyId = (req, res, next) => {
  const id = req.params.id;
  const carById = dataCars.find((item) => item.id === Number(id));

  if (!carById) {
    return res.status(404).json({ message: "Data car not found" });
  }
  next();
};

module.exports = { verifyId };
