import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = () => (
  <div className="navBar">
    <ul>
      <li>
        <Link to="/">View All Vehicles</Link>
      </li>
      <li>
        <Link to="/old">View Old Vehicles</Link>
      </li>
      <li>
        <Link to="/add">Add New Vehicles</Link>
      </li>
      <li>
        <Link to="/edit">Edit/Delete Vehicles</Link>
      </li>
    </ul>
  </div>
);

export default navBar;
