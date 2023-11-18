const {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar
} = require('./cars.js')
const carsServices = require('../services/cars.js')

jest.mock('../services/cars.js', () => ({
  createCarServices: jest.fn(),
  getAllCars: jest.fn(),
  updateCarServices: jest.fn(),
  deleteImage: jest.fn(),
  deleteCar: jest.fn()
}))

const car = {
  id: '23d7t3dg8ysusq',
  name: 'BMW',
  rentPerDay: 2000,
  capacity: 5,
  description: 'this is description',
  availableAt: '2023-10-05 17:24:28.769+07',
  type: 'BMW',
  image: 'this is image',
  image_url: 'this is image url',
  createdBy: '11223344'
}

// Create Cars
describe('#createCar', () => {
  it('Should return 200 success create cars', async () => {
    const mockRequest = {
      body: {
        name: 'BMW',
        rentPerDay: 2000,
        capacity: 5,
        description: 'this is description',
        availableAt: '2023-10-05 17:24:28.769+07',
        type: 'BMW'
      },
      file: {
        path: {
          image: 'this is image',
          replace: jest.fn()
        }
      },
      get: jest.fn()
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.createCarServices.mockReturnValue(car)
    await createCar(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      data: car,
      status: 'OK',
      message: 'Success'
    })
  })

  it('Should retrun 500 faild create cars', async () => {
    const error = new Error('failed')
    const mockRequest = {
      body: {
        name: 'BMW',
        rentPerDay: 2000,
        capacity: 5,
        description: 'this is description',
        availableAt: '2023-10-05 17:24:28.769+07',
        type: 'BMW'
      },
      file: {
        path: {
          image: 'this is image',
          replace: jest.fn()
        }
      },
      get: jest.fn()
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.createCarServices.mockReturnValue(Promise.reject(error))
    await createCar(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Get All Cars
describe('#getAllCars', () => {
  it('should return 200 success get all cars', async () => {
    const mockRequest = {}
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    await carsServices.getAllCars.mockReturnValue([car])
    await getAllCars(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'OK',
      message: 'Success',
      data: [car]
    })
  })
  it('should return 500 faild get all cars', async () => {
    const error = new Error('faild')
    const mockRequest = {}
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    await carsServices.getAllCars.mockReturnValue(Promise.reject(error))
    await getAllCars(mockRequest, mockResponse)
    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Get Car By id
describe('#getCarById', () => {
  it('should return 200 get car by id success', () => {
    const mockRequest = {
      carById: car
    }
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    jest.fn().mockReturnValue(mockRequest.carById)
    getCarById(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'OK',
      message: 'Success',
      data: mockRequest.carById
    })
  })
})

// Update Car
describe('#Update Car', () => {
  it('should return 200 success update car', async () => {
    const mockRequest = {
      body: {
        name: 'BMW',
        rentPerDay: 2000,
        capacity: 5,
        description: 'this is description',
        availableAt: '2023-10-05 17:24:28.769+07',
        type: 'BMW'
      },
      file: {
        path: {
          image: 'this is image',
          replace: jest.fn()
        }
      },
      get: jest.fn(),
      carById: {
        id: '23d7t3dg8ysusq',
        image: 'this is image'
      },
      userId: '123'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.updateCarServices.mockReturnValue([null, car])
    carsServices.deleteImage.mockReturnValue(mockRequest.carById.image)
    await updateCar(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'OK',
      message: 'Success updated',
      data: car
    })
  })

  it('should return 500 faild update car', async () => {
    const error = new Error('Faild')

    const mockRequest = {
      body: {
        name: 'BMW',
        rentPerDay: 2000,
        capacity: 5,
        description: 'this is description',
        availableAt: '2023-10-05 17:24:28.769+07',
        type: 'BMW'
      },
      file: {
        path: {
          image: 'this is image',
          replace: jest.fn()
        }
      },
      get: jest.fn(),
      carById: {
        id: '23d7t3dg8ysusq',
        image: 'this is image'
      },
      userId: '123'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.updateCarServices.mockReturnValue(Promise.reject(error))
    carsServices.deleteImage.mockReturnValue(null)
    await updateCar(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})

// Delete Car
describe('#deleteCar', () => {
  it('should return 200 success delete car', async () => {
    const message = 'Success deleted'

    const mockRequest = {
      carById: {
        id: '123',
        image: 'this is image'
      },
      userId: '123'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.updateCarServices.mockReturnValue(message)
    await carsServices.deleteCar.mockReturnValue(message)
    carsServices.deleteImage.mockReturnValue(message)
    await deleteCar(mockRequest, mockResponse)

    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'OK',
      message: 'Success deleted'
    })
  })

  it('Should return 500 faild delete car', async () => {
    const error = new Error('faild')
    const mockRequest = {
      carById: {
        id: '123',
        image: 'this is image'
      },
      userId: '123'
    }

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await carsServices.updateCarServices.mockReturnValue(Promise.reject(error))
    await carsServices.deleteCar.mockReturnValue(undefined)
    carsServices.deleteImage.mockReturnValue(undefined)
    await deleteCar(mockRequest, mockResponse)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'FAIL',
      message: error.message
    })
  })
})
