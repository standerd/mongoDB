import React, { Component } from "react";
import "../vehicleListing/vehicleListing.css";
import Spinner from "../spinner/spinner";

class OldVehicleListing extends Component {
  state = {
    cars: []
  };

  componentDidMount() {
    fetch("/old")
      .then(res => res.json())
      .then(resData => this.setState({ cars: resData.data }));
  }

  render() {
    let car;

    this.state.cars.length === 0
      ? (car = <Spinner />)
      : (car = this.state.cars.map(cars => {
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
  }
}

export default OldVehicleListing;
