export default function RestartGame({ isBoardFilled, onRestartClick }) {
  if (isBoardFilled) {
    return (
      <button
        className="h-12 w-48 mt-6 border-2 border-white duration-500 hover:text-slate-800 hover:bg-white"
        onClick={onRestartClick}
      >
        Restart the game!
      </button>
    );
  } else return;
}
