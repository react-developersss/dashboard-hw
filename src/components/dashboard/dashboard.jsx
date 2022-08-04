import React, { Component } from "react";
import Board from "./components/board";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    const { onActive, boards } = this.props;
    return (
      <div className="dashboard">
        <div className="logo">Asilbek</div>
        <input type="text" placeholder="search" />

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
