import React, { Component } from "react";
import "./addVehicle.css";
import { withRouter } from "react-router-dom";

class AddVehicle extends Component {
  state = {
    make: "",
    modelYear: "",
    owner: "",
    reg: "",
    street: "",
    city: "",
    country: "",
    redirect: false
  };

  onChangeHandler = name => e => {
    let changeValue = e.target.value;
    this.setState({ [name]: changeValue });
  };

  onClickHandler = () => {
    fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make: this.state.make,
        modelYear: this.state.modelYear,
        owner: this.state.owner,
        reg: this.state.reg,
        adress: {
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

  render() {
    return (
      <div className="main">
        <h1>Lets Add a New Vehicle</h1>
        <h4>Please Enter the Vehicle Details and Click Submit</h4>
        <div className="inputForm">
          <input
            onChange={this.onChangeHandler("reg")}
            type="text"
            placeholder="Vehicle Reg Number"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("modelYear")}
            type="text"
            placeholder="Vehicle Model Year"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("owner")}
            type="text"
            placeholder="Owner Name and Surname"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("make")}
            type="text"
            placeholder="Vehicle Make and Model"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("street")}
            type="text"
            placeholder="Owner Street Address"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("city")}
            type="text"
            placeholder="Owner City"
            required
          ></input>
          <input
            onChange={this.onChangeHandler("country")}
            type="text"
            placeholder="Owner Country"
            required
          ></input>
          <button
            type="submit"
            onClick={this.onClickHandler}
            className="submitButton"
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddVehicle);
