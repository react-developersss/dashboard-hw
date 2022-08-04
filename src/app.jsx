import React, { Component } from "react";
import { Dashboard, Navbar, Banner } from "./components/index";
import "./assets/styles/base.scss";
class App extends Component {
  state = {
    isDark: false,
  };

  render() {
    return (
      <div className="wrapper">
        <Dashboard />
        <div className="main">
          <Navbar />
          <Banner />
        </div>
      </div>
    );
  }
}

export default App;
