const { CarsModel } = require("../../models");
const fs = require("fs");

const createNewCar = async (req, res) => {
  try {
    const body = req.body;
   const response =  await CarsModel.create({
      name : body.name,
      rentPerDay : body.rentPerDay,
      capacity : body.capacity,
      description : body.description,
      availableAt : body.availableAt,
      type : body.type,
      image: body.imageName,
      image_url : body.image_url
    });

    res.status(201).json({ message: "New car successfully created", data : response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllCars = async (req, res) => {
  try {
    const response = await CarsModel.findAll();
    res.status(200).json({message : "Get all cars is successfully", data : response});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getCarById = async (req, res) => {
  try {
    const response = req.carById;
    res.status(200).json({message : "Get car by id is successfully", data : response});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCar = async (req, res) => {
  try {
    const body = req.body;
    const id = req.carById.id;
    let newImage = "";

    // Mengecek apakah image berubah atau tidak
    if (req.file === null) {
      newImage = req.carById.image;
    } else {
      newImage = body.imageName;
    }

    await CarsModel.update(
      {
        name : body.name,
        rentPerDay : body.rentPerDay,
        capacity : body.capacity,
        description : body.description,
        availableAt : body.availableAt,
        type : body.type,
        image: newImage,
        image_url : body.image_url,
      },
      {
        where: {
          id: id,
        },
      }
    );

    const filePth = `./public/${req.carById.image}`;
    fs.unlinkSync(filePth)
    res.status(201).json({ message: "cars is successfully updated", data : response});
  } catch (error) {
    console.log(error);
    res.status(500).json({message : error.message})
  }
};

const deleteCar = async (req, res) => {
  try {

    const id = req.carById.id;

    await CarsModel.destroy({
      where : {
        id : id,
      }
    });

    const filePth = `./public/${req.carById.image}`;
    fs.unlinkSync(filePth);

    res.status(200).json({message : 'Delete car successfully'})
  } catch (error) {
    console.log(error);
    res.status(500).json({message : error.message})
  }
};

module.exports = { createNewCar, getAllCars, getCarById, updateCar, deleteCar };
