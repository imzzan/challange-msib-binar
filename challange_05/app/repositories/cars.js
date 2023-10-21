const {Cars, User} = require("../models");

exports.create = (body) => {
  return Cars.create(body);
};

exports.findCarsAll = () => {
  return Cars.findAll({attributes : {exclude : ['createdBy', 'updatedBy', 'deletedBy']}});
};

exports.findCarById = (id) => {
  return Cars.findByPk(id, {
    include : [
      {
        model : User,
        as : 'created',
        attributes : {exclude : ['password']}
      },
      {
        model : User,
        as : 'updated',
        attributes : {exclude : ['password']}
      },
      {
        model : User,
        as : 'deleted',
        attributes : {exclude : ['password']}
      }
    ],
  });
};

exports.updateCar = (body, id) => {
  return Cars.update(body, { where: { id: id }, returning: true });
};

exports.deleteCar = (id) => {
  return Cars.destroy({
    where: { id: id },
  });
};