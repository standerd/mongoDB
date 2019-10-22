module.exports = app => {
  const car = require("../controller/cars.controller.js");
  app.post("/add", car.create);
};
