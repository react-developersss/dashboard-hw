import { logo, search } from "../../assets/images";
import Board from "./components/board";
import Footer from "../footer/footer";

import "./dashboard.scss";

function Dashboard({ boards, onElement, dashboard }) {
  return (
    <div className="dashboardZone">
      <div className="dashboard">
        <div className="logo">
          {logo}
          <span className={dashboard ? "hide" : ""}>MingCute</span>
        </div>
        <div className="input-wrapper">
          {search}
          <input
            className={dashboard ? "hide" : ""}
            type="text"
            placeholder="search"
          />
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
      <Footer dashboard={dashboard} />
    </div>
  );
}

export default Dashboard;
