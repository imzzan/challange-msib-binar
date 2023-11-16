const { User } = require('../models')

exports.create = (body) => {
  return User.create(body)
}

exports.findUserByEmail = (email) => {
  return User.findOne({
    where: {
      email
    }
  })
}

exports.findUserById = (id) => {
  return User.findOne({
    where: {
      id
    }
  })
}
