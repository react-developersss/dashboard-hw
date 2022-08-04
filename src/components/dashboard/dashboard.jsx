import Board from "./components/board";
import { logo, search } from "../../assets/images/index";
import "./dashboard.scss";

function Dashboard({ boards, onElement }) {
  return (
    <div className="dashboard">
      <div className="logo">
        {logo}
        MingCute
      </div>
      <div className="input-wrapper">
        {search}
        <input type="text" placeholder="search" />
      </div>
      {boards.map((board, idx) => (
        <Board
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
