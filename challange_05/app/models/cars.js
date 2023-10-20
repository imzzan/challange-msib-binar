'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cars.belongsTo(models.User, {
        as : 'user',
        foreignKey : 'createdBy'
      })
    }
  }
  Cars.init({
    name: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    availableAt: DataTypes.DATE,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    image_url: DataTypes.STRING,
    createdBy: DataTypes.UUID,
    updatedBy: DataTypes.UUID,
    deletedBy: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Cars',
    paranoid : true
  });
  return Cars;
};