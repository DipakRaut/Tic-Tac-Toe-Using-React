import React from "react";
import Square from "./Square";
import { useAppDispatch, useAppSelector } from "../app/store";
import { playMove } from "../features/game/gameSlice";
import {
  selectBoard,
  selectWinningLine,
  selectStatus,
} from "../features/game/selectors";

const Board: React.FC = () => {
  const board = useAppSelector(selectBoard);
  const winningLine = useAppSelector(selectWinningLine);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const isDisabled = status !== "in-progress";

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {board.map((cell, idx) => {
        const highlight = winningLine?.includes(idx) ?? false;
        return (
          <Square
            key={idx}
            value={cell}
            highlight={highlight}
            onClick={() => !isDisabled && dispatch(playMove(idx))}
          />
        );
      })}
    </div>
  );
};

export default Board;
