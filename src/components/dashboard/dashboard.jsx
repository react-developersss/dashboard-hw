import React, { Component } from "react";
import Board from "./components/board";
import {
  analystic,
  dashboard,
  inbox,
  messages,
  news,
  orders,
  schedules,
  settings,
} from "../../assets/images";
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
    const { onActive, active } = this.props;
    return (
      <div className="dashboard">
        <div className="logo">Asilbek</div>
        <input type="text" placeholder="search" />

        {boards.map((board, idx) => (
          <Board
            active={active}
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
