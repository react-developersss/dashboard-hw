import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    const { onToggle } = this.props;
    return (
      <div className="navbar">
        <i onClick={() => onToggle()} className="fa-solid fa-bars"></i>
        <h1>Navbar</h1>
      </div>
    );
  }
}

export default Navbar;
