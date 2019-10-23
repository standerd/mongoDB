import React, { Component } from "react";
import VehicleListing from "./containers/vehicleListing/vehicleListing";
import AddVehicle from "./containers/addVehicles/addVehicle";
import EditVehicle from "./containers/editVehicles/editVehicles";
import OldVehicles from "./containers/oldVehicles/oldVehicles";
import NavBar from "./containers/navigation/navBar";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    cars: []
  };

  fetchData = () => {
    fetch("/home")
      .then(res => res.json())
      .then(resData => this.setState({ cars: resData.data }));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Welcome To Our Vehicle Listing Database</h1>
        <NavBar />
        <Route
          path="/"
          exact
          component={() => <VehicleListing cars={this.state.cars} />}
        />
        <Route
          path="/add"
          component={() => <AddVehicle getData={this.fetchData} />}
        />
        <Route
          path="/edit"
          component={() => (
            <EditVehicle cars={this.state.cars} getData={this.fetchData} />
          )}
        />
        <Route path="/old" exact component={OldVehicles} />
      </div>
    );
  }
}

export default App;
