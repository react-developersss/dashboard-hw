import React, { Component } from "react";
import { Dashboard, Navbar, Banner } from "./components/index";
import {
  analystic,
  dashboard,
  inbox,
  messages,
  news,
  orders,
  schedules,
  settings,
} from "../src/assets/images/index";
import "./assets/styles/base.scss";

const boards = [
  {
    icon: dashboard,
    title: "Dashboard",
  },
  {
    icon: orders,
    title: "Orders",
  },
  {
    icon: schedules,
    title: "Schedules",
  },
  {
    icon: messages,
    title: "Messages",
  },
  {
    icon: inbox,
    title: "Inbox",
  },
  {
    icon: analystic,
    title: "Analystic",
  },
  {
    icon: news,
    title: "News",
  },
  {
    icon: settings,
    title: "Settings",
  },
];

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
        <Dashboard boards={boards} onActive={this.handleActive} />
        <div className="main">
          <Navbar />
          <Banner value={this.state.title} />
        </div>
      </div>
    );
  }
}

export default App;
