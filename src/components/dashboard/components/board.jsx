import React from "react";
import "./board.scss";

function Board({ board, onElement, title }) {
  return (
    <>
      <button className="board" onClick={(e) => onElement(title)}>
        <div className="board-name">
          {board.icon} {board.title}
        </div>

        {(title === "Orders" && <span className="message">5</span>) ||
          (title === "Messages" && <span className="message">3</span>)}
      </button>
    </>
  );
}

export default Board;
