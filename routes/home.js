module.exports = app => {
  const car = require("../controller/cars.controller.js");
  app.get("/home", car.findAll);
};
