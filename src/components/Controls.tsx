import React from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { resetGame } from "../features/game/gameSlice";
import { selectStatus, selectCurrentPlayer } from "../features/game/selectors";

const Controls: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const currentPlayer = useAppSelector(selectCurrentPlayer);

  return (
    <div className="flex items-center justify-between gap-3 w-full max-w-xs mx-auto">
      <div className="text-sm text-gray-600">
        {status === "in-progress" ? `Next: ${currentPlayer}` : "Game over"}
      </div>
      <button
        onClick={() => dispatch(resetGame())}
        className="px-4 py-2 rounded-2xl bg-gray-900 text-white hover:bg-black transition text-sm"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
