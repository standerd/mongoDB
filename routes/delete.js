module.exports = app => {
  const car = require("../controller/cars.controller.js");
  app.delete("/delete", car.deleteCarByReg);
};
