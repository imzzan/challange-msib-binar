const {Cars} = require("../models");

exports.create = (body) => {
  return Cars.create(body);
};

exports.findCarsAll = () => {
  return Cars.findAll();
};

exports.findCarById = (id) => {
  return Cars.findByPk(id);
};

exports.updateCar = (body, id) => {
  return Cars.update(body, { where: { id: id }, returning: true });
};

exports.deleteCar = (id) => {
  return Cars.destroy({
    where: { id: id },
  });
};