import React from "react";
import "./board.scss";

function Board({ icon, title, onActive, active }) {
  return (
    <div
      className="board"
      onClick={() => onActive(title)}
      style={{
        borderTop: `${title === "News" && "1px solid #f2f4f6"}`,
        backgroundColor: `${active  ? "red" : ""}`,
      }}
    >
      <div className="type">
        {icon}
        <span>{title}</span>
      </div>
      {(title === "Orders" && <span className="message">5</span>) ||
        (title === "Messages" && <span className="message">3</span>)}
    </div>
  );
}

export default Board;
