import Square from "./Square";
// import { useState } from "react";

export default function Board({ isXNext, squares, onPlay, winner }) {
  function handleClick(i) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const squareBlocks = squares.map((squareValue, squareIndex) => {
    return (
      <Square
        value={squareValue}
        onSquareClick={() => handleClick(squareIndex)}
        key={squareIndex}
      />
    );
  });

  let boardBlock = [];
  for (let i = 0; i < 3; i++) {
    boardBlock = [...boardBlock, squareBlocks.slice(3 * i, 3 * i + 3)];
  }
  boardBlock = boardBlock.map((rowBlock, rowIndex) => {
    return (
      <div className="w-72 flex" key={rowIndex}>
        {rowBlock}
      </div>
    );
  });

  return <div>{boardBlock}</div>;
}
