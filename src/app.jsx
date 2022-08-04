import React, { Component } from "react";
import { Dashboard, Navbar, Banner } from "./components/index";
import "./assets/styles/base.scss";
class App extends Component {
  state = {
    isDark: false,
    title: "",
  };

  handleActive = (selectedBoard) => {
    this.setState({
      title: (this.state.title = selectedBoard),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Dashboard onActive={this.handleActive} />
        <div className="main">
          <Navbar />
          <Banner value={this.state.title} />
        </div>
      </div>
    );
  }
}

export default App;
