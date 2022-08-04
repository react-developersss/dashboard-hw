import React, { Component } from "react";
import Board from "./components/board";
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
} from "../../assets/images/index";
import "./dashboard.scss";

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

class Dashboard extends Component {
  render() {
    const { onActive } = this.props;
    return (
      <div className= "dashboard">
        <div className="logo">
          {logo}
          <span className= "">MingCute</span>
        </div>
        <div className="input-wrapper">
          {search}
          <input className= "" type="text" placeholder="search" />
        </div>

        {boards.map((board, idx) => (
          <Board
            key={idx}
            icon={board.icon}
            onActive={onActive}
            title={board.title}
          />
        ))}
      </div>
    );
  }
}

export default Dashboard;
