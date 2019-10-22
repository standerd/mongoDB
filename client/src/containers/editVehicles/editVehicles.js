import React, { Component } from "react";
import "./editVehicles.css";
import { withRouter } from "react-router-dom";

class EditVehicles extends Component {
  state = {
    carToEdit: undefined,
    regToEdit: "",
    make: "",
    modelYear: "",
    owner: "",
    reg: "",
    street: "",
    city: "",
    country: ""
  };

  onChangeHandler = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  onRegToChangeHandler = e => {
    console.log(e.target.value);
    console.log(this.props.cars);
    const search = (nameKey, myArray) => {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].reg === nameKey) {
          return myArray[i];
        }
      }
    };
    let resultObject = search(e.target.value, this.props.cars);
    console.log("ResultObject = " + resultObject);
    this.setState({
      carToEdit: resultObject,
      regToEdit: e.target.value,
      make: resultObject.make,
      modelYear: resultObject.modelYear,
      owner: resultObject.owner,
      reg: resultObject.reg,
      street: resultObject.adress.street,
      city: resultObject.adress.city,
      country: resultObject.adress.country
    });
  };

  amendCarHandler = () => {
    fetch("/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reg: this.state.regToEdit,
        updateValue: {
          make: this.state.make,
          modelYear: this.state.modelYear,
          owner: this.state.owner,
          reg: this.state.reg,
          street: this.state.street,
          city: this.state.city,
          country: this.state.country
        }
      })
    })
      .then(res => res.json())
      .then(resdata => {
        this.props.getData();
        this.props.history.replace("/");
      })
      .catch(err => console.log(err));
  };

  deleteCarHandler = () => {
    fetch("/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        reg: this.state.regToEdit
      })
    })
      .then(res => res.json())
      .then(resdata => {
        this.props.getData();
        this.props.history.replace("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    let vehicleDetails;
    let car = this.props.cars.map(cars => {
      return <option key={cars.reg}>{cars.reg}</option>;
    });

    this.state.carToEdit === undefined
      ? (vehicleDetails = <p></p>)
      : (vehicleDetails = (
          <div className="inputForm">
            <p>
              Please make changes to the required fields below and click Edit
              Vehicle, or click Delete Vehicle to completely remove the vehicle.
            </p>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Vehicle Reg Number"
              value={this.state.reg}
              name="reg"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Vehicle Model Year"
              value={this.state.modelYear}
              name="modelYear"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Owner Name and Surname"
              value={this.state.owner}
              name="owner"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Vehicle Make and Model"
              value={this.state.make}
              name="make"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Owner Street Address"
              value={this.state.street}
              name="street"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Owner City"
              value={this.state.city}
              name="city"
              required
            ></input>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Owner Country"
              value={this.state.country}
              name="country"
              required
            ></input>
            <button
              type="submit"
              onClick={this.amendCarHandler}
              className="submitButton"
            >
              Edit Vehicle
            </button>
            <button
              type="submit"
              onClick={this.deleteCarHandler}
              className="submitButton"
            >
              Delete Vehicle
            </button>
          </div>
        ));

    return (
      <div>
        <select onChange={this.onRegToChangeHandler}>
          <option>Please Select Vehicle</option>
          {car}
        </select>
        {vehicleDetails}
      </div>
    );
  }
}

export default withRouter(EditVehicles);
