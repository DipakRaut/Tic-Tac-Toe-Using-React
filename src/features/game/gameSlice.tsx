import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Cell, Player, Status } from "./utils";
import { calculateWinner } from "./utils";

export interface GameState {
  board: Cell[];
  currentPlayer: Player;
  status: Status;
  winner: Player | null;
  winningLine: number[] | null;
  moveCount: number;
}

const initialState: GameState = {
  board: Array<Cell>(9).fill(null),
  currentPlayer: "X",
  status: "in-progress",
  winner: null,
  winningLine: null,
  moveCount: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    playMove(state, action: PayloadAction<number>) {
      const i = action.payload;
      if (state.status !== "in-progress") return;
      if (state.board[i] !== null) return;

      state.board[i] = state.currentPlayer;
      state.moveCount += 1;

      const { winner, line } = calculateWinner(state.board);

      if (winner) {
        state.status = "won";
        state.winner = winner;
        state.winningLine = line;
      } else if (state.moveCount === 9) {
        state.status = "draw";
      } else {
        state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
      }
    },
    resetGame() {
      return initialState;
    },
    // Helpful for future realtime extension
    setStateFromServer(_state, action: PayloadAction<GameState>) {
      return action.payload;
    },
  },
});

export const { playMove, resetGame, setStateFromServer } = gameSlice.actions;
export default gameSlice.reducer;
