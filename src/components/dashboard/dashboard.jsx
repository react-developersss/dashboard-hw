import { logo, search } from "../../assets/images";
import Board from "./components/board";

import "./dashboard.scss";

function Dashboard({ boards, onElement, dashboard }) {
  return (
    <div className="dashboard">
      <div className="logo">
        {logo}
        <span className={dashboard ? "hide" : ""}>MingCute</span>
      </div>
      <div className={dashboard ? "hide" : "input-wrapper"}>
        {search}
        <input type="text" placeholder="search" />
      </div>
      {boards.map((board, idx) => (
        <Board
          dashboard={dashboard}
          key={idx}
          onElement={onElement}
          board={board}
          title={board.title}
        />
      ))}
    </div>
  );
}

export default Dashboard;
