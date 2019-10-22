import React from "react";
import "./vehicleListing.css";
import Spinner from "../spinner/spinner";

const vehicleListing = props => {
  // Data for the listing is fetched in the main App.js file and passed to the vehicle listing as props

  let car;

  props.cars.length === 0
    ? (car = <Spinner />)
    : // Map through the array that is returned from props and render all vehicles

      (car = props.cars.map(cars => {
        return (
          <div key={cars.reg} className="vehicle">
            <p className="vehicleItem">{cars.reg}</p>
            <p className="vehicleItem">{cars.make}</p>
            <p className="vehicleItem">{cars.modelYear}</p>
            <p className="vehicleItem">{cars.owner}</p>
            <p className="vehicleItem">{cars.adress.street}</p>
            <p className="vehicleItem">{cars.adress.city}</p>
            <p className="vehicleItem">{cars.adress.country}</p>
          </div>
        );
      }));
  return (
    <div>
      {/* Header Setup */}
      <div className="vehicle header">
        <p className="vehicleItem">Reg No</p>
        <p className="vehicleItem">Make</p>
        <p className="vehicleItem">Year</p>
        <p className="vehicleItem">Owner</p>
        <p className="vehicleItem">Street</p>
        <p className="vehicleItem">City</p>
        <p className="vehicleItem">Country</p>
      </div>
      {car}
    </div>
  );
};

export default vehicleListing;
