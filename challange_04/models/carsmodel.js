'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CarsModel.init({
    name: DataTypes.STRING,
    rentPerDay : DataTypes.INTEGER,
    capacity : DataTypes.INTEGER,
    description : DataTypes.STRING,
    availableAt : DataTypes.DATE,
    type : DataTypes.STRING,
    image_url : DataTypes.STRING,
    image : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarsModel',
  });
  return CarsModel;
};