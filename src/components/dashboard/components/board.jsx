import React from "react";
import "./board.scss";
import "../../../assets/styles/base.scss"

function Board({ board, onElement, title, dashboard }) {
  return (
    <>
      <button className="board" onClick={(e) => onElement(title)}>
        <div className="board-name">
          {board.icon}
          <span className = {dashboard ? 'hide ' : ''}>{board.title}</span>
        </div>

        {(title === "Orders" && <span className= {dashboard ? 'hide' : "message"}>5</span>) ||
          (title === "Messages" && <span className= {dashboard ? 'hide' : "message"}>3</span>)}
      </button>
    </>
  );
}

export default Board;
