module.exports = app => {
  const car = require("../controller/cars.controller.js");
  app.put("/update", car.updateByReg);
};
