import React, { Component } from "react";
import { Dashboard, Navbar, Banner } from "./components/index";
import "./assets/styles/base.scss";
class App extends Component {
  state = {
    isDark: false,
    title: "",
    isDashboard: false
  };

  handleActive = (selectedBoard) => {
    this.setState({
      title: (this.state.title = selectedBoard),
    });
  };

  handleOpen = ()=> {
    this.setState({isDashboard: !this.state.isDashboard})
    console.log(this.state);
  }

  render() {
    return (
      <div className="wrapper">
        <Dashboard onActive={this.handleActive} dashboard = {this.state.isDashboard}/>
        <div className="main">
          <Navbar onToggle = {this.handleOpen}/>
          <Banner value={this.state.title} />
        </div>
      </div>
    );
  }
}

export default App;
