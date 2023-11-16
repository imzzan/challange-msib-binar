'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      User.hasMany(models.Cars, {
        as: 'created',
        foreignKey: 'createdBy'
      }),
      User.hasMany(models.Cars, {
        as: 'updated',
        foreignKey: 'updatedBy'
      }),
      User.hasMany(models.Cars, {
        as: 'deleted',
        foreignKey: 'deletedBy'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('superadmin', 'admin', 'member')
  }, {
    sequelize,
    modelName: 'User'
  })
  return User
}
