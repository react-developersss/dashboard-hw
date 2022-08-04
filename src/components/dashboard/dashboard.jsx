import React, { Component } from "react";
import { logo, search } from "../../assets/images";

import "./dashboard.scss"

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="logo">
          {logo}
          MingCute
        </div>
        <div className="input-wrapper">
          {search}
          <input type="text" placeholder="search" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
