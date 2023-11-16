const {
  createUserAdmin,
  login,
  currentUser,
  refreshToken,
  logout
} = require('./user.js')
const userServices = require('../services/user.js')
const authServices = require('../services/auth.js')

jest.mock('../services/user.js', () => ({
  userServices: jest.fn(),
  createUser: jest.fn(),
  login: jest.fn()
}))

jest.mock('../services/auth.js', () => ({
  createAccessToken: jest.fn(),
  createRefreshToken: jest.fn(),
  verifyToken: jest.fn()
}))

// Register admin
describe('#createUserAdmin', () => {
  it('Should return 201 Register admin', async () => {
    const mockRequest = {
      name: 'Muzani',
      email: 'muzani@gmail.com',
      password: '12345678',
      role: 'admin'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await userServices.createUser.mockReturnValue(mockRequest)
    await createUserAdmin(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      message: 'Success',
      data: mockRequest
    })
  })

  it('Shoud return return 500 Error create admin', async () => {
    const error = new Error('Failed')

    const mockRequest = {
      name: 'Muzani',
      email: 'muzani@gmail.com',
      password: '12345678',
      role: 'admin'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    userServices.createUser.mockReturnValue(Promise.reject(error))
    await createUserAdmin(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Register member
describe('#createUserMember', () => {
  it('Should return 201 Register member', async () => {
    const mockRequest = {
      name: 'Muzani',
      email: 'muzani@gmail.com',
      password: '12345678',
      role: 'member'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await userServices.createUser.mockReturnValue(mockRequest)
    await createUserAdmin(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      message: 'Success',
      data: mockRequest
    })
  })

  it('Shoud return return 500 Error create member', async () => {
    const error = new Error('Failed')

    const mockRequest = {
      name: 'Muzani',
      email: 'muzani@gmail.com',
      password: '12345678',
      role: 'member'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    userServices.createUser.mockReturnValue(Promise.reject(error))
    await createUserAdmin(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Login
describe('#login', () => {
  it('Should return 200 login success', async () => {
    const user = {
      id: '23d7t3dg8ysusq',
      name: 'Muhamad Muzani',
      email: 'muzani@gmail.com',
      password: 'muzani123',
      role: 'admin'
    }
    const accessToken = 'This is access token'
    const refreshToken = 'This is refresh token'
    const mockRequest = {
      email: 'muzani@gmail.com',
      password: 'muzani123',
      role: 'admin'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      cookie: jest.fn().mockReturnThis()
    }

    await userServices.login.mockReturnValue(user)
    authServices.createAccessToken.mockReturnValue(accessToken)
    authServices.createRefreshToken.mockReturnValue(refreshToken)
    await login(mockRequest, mockResponse)

    expect(mockResponse.cookie).toHaveBeenCalledWith(
      'refreshToken',
      refreshToken,
      { httpOnly: true, max: 24 * 60 * 60 * 1000 }
    )
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      message: 'Success',
      data: user,
      acessToken: accessToken
    })
  })

  it('Shoud return return 500 Error login faild', async () => {
    const error = new Error('Failed')

    const mockRequest = {
      email: 'muzani@gmail.com',
      password: '12345678',
      role: 'admin'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    await userServices.login.mockReturnValue(Promise.reject(error))
    authServices.createAccessToken.mockReturnValue(null)
    authServices.createRefreshToken.mockReturnValue(null)
    await login(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Refresh Token
describe('#refreshToken', () => {
  it('Should return 200 success', async () => {
    const token = 'This is access token'
    const user = {
      userId: '123456789',
      email: 'muzani@gmail.com',
      role: 'admin'
    }

    const mockRequest = {
      cookies: {
        refreshToken: 'this is a refresh token'
      }
    }
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    authServices.verifyToken.mockReturnValue(user)
    authServices.createAccessToken.mockReturnValue(token)
    await refreshToken(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      message: 'Success',
      accessToken: token
    })
  })

  it('Should return 500 failed', () => {
    const error = new Error('Cannot read properties of undefined (reading \'userId\')')
    const mockRequest = {
      cookies: {
        refreshToken: 'this is a refresh token'
      }
    }
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    authServices.verifyToken.mockReturnValue(undefined)
    authServices.createAccessToken.mockReturnValue(undefined)
    refreshToken(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Current User
describe('#currentUser', () => {
  it('Should return 200 success get current user', () => {
    const mockRequest = {
      user: {
        userId: '123456789',
        email: 'muzani@gmail.com',
        role: 'admin'
      }
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    currentUser(mockRequest, mockResponse)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok',
      message: 'Success',
      data: mockRequest.user
    })
  })

  // it('should return 500 faild', () => {
  //   const error = new Error('message": "Cannot read properties of null (reading \'userId\')')

  //   const mockRequest = {
  //     user: {
  //       userId: '123456789',
  //       email: 'muzani@gmail.com',
  //       role: 'admin'
  //     }
  //   }

  //   const mockResponse = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn().mockReturnThis()
  //   }
  //   currentUser(mockRequest, mockResponse)

  //   expect(mockResponse.status).toHaveBeenCalledWith(500)
  //   expect(mockResponse.json).toHaveBeenCalledWith({
  //     status: 'FAIL',
  //     message: error.message
  //   })
  // })
})

// Logout
describe('#Logout', () => {
  it('should 200 log out success', () => {
    const mockRequest = {}
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      clearCookies: jest.fn().mockReturnThis()
    }

    logout(mockRequest, mockResponse)

    expect(mockResponse.clearCookies).toHaveBeenCalledWith('refreshToken')
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'Ok', message: 'Logout Success'
    })
  })
})
