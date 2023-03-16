// import { useState } from "react";

// import "../styles/everything.css";

export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        className="h-24 w-24 text-5xl border-2 border-white duration-500 hover:text-slate-800 hover:bg-white"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
}
