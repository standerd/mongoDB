const Car = require("../models/cars.model");
const mongoose = require("mongoose");

exports.create = (req, res) => {
  // Create and Save New Car
  let carModel = new Car({
    make: req.body.make,
    modelYear: req.body.modelYear,
    owner: req.body.owner,
    reg: req.body.reg,
    adress: {
      street: req.body.adress.street,
      city: req.body.adress.city,
      country: req.body.adress.country
    }
  });

  carModel.save((err, data) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "Oops, we had an error, could not creare car" });
    } else {
      res.json({ message: "The car was added" });
    }
  });
};

// findAll Cars and return the data to the client

exports.findAll = (req, res) => {
  Car.find((err, cars) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Some error occurred, we could not retrieve your data."
      });
    } else {
      res.status(200).json({ data: cars });
    }
  });
};

// update the vehicle details by registration number received from the client

exports.updateByReg = (req, res) => {
  let toUpdate = req.body.reg;
  let updateValue = req.body.updateValue;

  Car.updateOne(
    { reg: toUpdate },
    {
      $set: {
        reg: updateValue.reg,
        make: updateValue.make,
        modelYear: updateValue.modelYear,
        owner: updateValue.owner,
        adress: {
          street: updateValue.street,
          city: updateValue.city,
          country: updateValue.country
        }
      }
    },
    err => {
      if (err) {
        console.log("Oops, error, please check data and try again");
        res.status(500).json({ message: "ERROR: Not Updated. " + err });
      }
      res.status(200).json({ message: "Your Car has been updated" });
    }
  );
};

// Delete a vehicle by registration number received from the client

exports.deleteCarByReg = (req, res) => {
  let deleteReg = req.body.reg;
  Car.deleteOne({ reg: deleteReg }, err => {
    if (err) {
      console.log("Oops, error, car was not removed " + err);
      res.status(500),
        json({ message: "Oops, error, car was not removed" + err });
    }
    res.status(200).json({ message: "Success the car has been removed" });
  });
};

exports.findOld = (req, res) => {
  Car.find({ modelYear: { $lt: "2014" } }, (err, cars) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Some error occurred, we could not retrieve your data."
      });
    } else {
      console.log(cars);
      res.status(200).json({ data: cars });
    }
  });
};
