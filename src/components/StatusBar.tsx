import React from "react";
import { useAppSelector } from "../app/store";
import {
  selectStatus,
  selectWinner,
  selectCurrentPlayer,
} from "../features/game/selectors";

const StatusBar: React.FC = () => {
  const status = useAppSelector(selectStatus);
  const winner = useAppSelector(selectWinner);
  const currentPlayer = useAppSelector(selectCurrentPlayer);

  let text = "";
  if (status === "in-progress") text = `Turn: Player ${currentPlayer}`;
  if (status === "won") text = `Winner: Player ${winner}`;
  if (status === "draw") text = `It's a draw!`;

  return (
    <div
      role="status"
      className="text-center text-lg sm:text-xl font-medium py-2"
    >
      {text}
    </div>
  );
};

export default StatusBar;
