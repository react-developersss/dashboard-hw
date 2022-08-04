import React, { Component } from "react";
import { Dashboard, Navbar, Banner } from "./components/index";
import {
  analystic,
  dashboard,
  search,
  logo,
  inbox,
  messages,
  news,
  orders,
  schedules,
  settings,
} from "./assets/images/index";
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
    boards: boards,
  };

  handleElement = (title) => {
    this.setState({
      title: (this.state.title = title),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Dashboard boards={this.state.boards} onElement={this.handleElement} />
        <div className="main">
          <Navbar />
          <Banner value={this.state.title} />
        </div>
      </div>
    );
  }
}

export default App;
