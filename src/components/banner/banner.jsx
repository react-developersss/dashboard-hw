import React, { Component } from "react";
import "./banner.scss";
class Banner extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="banner">
        <h1>{value}</h1>
      </div>
    );
  }
}

export default Banner;
