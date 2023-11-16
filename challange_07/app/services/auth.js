const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const ApplicationError = require('../../error/ApplicationError')
require('dotenv').config()

exports.enCryptedPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    return hashPassword
  } catch (error) {
    throw new ApplicationError(error.message, 500)
  }
}

exports.comparePassword = async (password, hash) => {
  try {
    const matchPssword = await bcrypt.compare(password, hash)
    return matchPssword
  } catch (error) {
    throw new ApplicationError(error.message, 500)
  }
}

exports.createAccessToken = (payload) => {
  try {
    const acessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
      expiresIn: '1h'
    })
    return acessToken
  } catch (error) {
    throw new ApplicationError(error.message, 500)
  }
}

exports.createRefreshToken = (payload) => {
  try {
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN, {
      expiresIn: '1h'
    })
    return refreshToken
  } catch (error) {
    throw new ApplicationError(error.message, 500)
  }
}

exports.verifyToken = (token, env) => {
  try {
    const decoded = jwt.verify(token, env, (error, payload) => {
      if (error) {
        throw new ApplicationError('unauthorized', 401)
      }
      return payload
    })

    return decoded
  } catch (error) {
    throw new ApplicationError(error.message, 500)
  }
}
