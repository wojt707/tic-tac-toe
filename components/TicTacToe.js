import { useState } from "react";
import Board from "./Board";
import RestartGame from "./restartGame";
// import "./everything.css";

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const isXNext = currentMove % 2 === 0;
  let gameOver = false;

  const winner = calculateWinner(currentSquares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
    gameOver = true;
  } else {
    if (currentMove === 9) {
      status = "Draw";
      gameOver = true;
    } else {
      status = "Next player: " + (isXNext ? "X" : "O");
    }
  }

  function handlePlay(newSquares) {
    const newHistory = history.slice(0, currentMove + 1);
    newHistory.push(newSquares);
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          className="h-12 w-48 mb-2 border-2 border-white duration-500 hover:text-slate-800 hover:bg-white"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center text-7xl h-24">Tic Tac Toe</div>
      <div className="flex">
        <div className="flex flex-col items-center">
          <Board
            isXNext={isXNext}
            squares={currentSquares}
            onPlay={handlePlay}
            winner={winner}
          />
          <div className="text-2xl mt-6 h-12 w-72 flex justify-center items-center">
            {status}
          </div>
          <RestartGame
            isBoardFilled={gameOver}
            onRestartClick={handleRestart}
          />
        </div>
        <div className="ml-12">
          <ul className="no_bullets">{moves}</ul>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(nineLengthArray) {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (
      nineLengthArray[a] &&
      nineLengthArray[a] === nineLengthArray[b] &&
      nineLengthArray[a] === nineLengthArray[c]
    ) {
      return nineLengthArray[a];
    }
  }
  return null;
}
