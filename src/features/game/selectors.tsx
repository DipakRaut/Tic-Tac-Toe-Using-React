import type { RootState } from "../../app/store";

export const selectBoard = (s: RootState) => s.game.board;
export const selectCurrentPlayer = (s: RootState) => s.game.currentPlayer;
export const selectStatus = (s: RootState) => s.game.status;
export const selectWinner = (s: RootState) => s.game.winner;
export const selectWinningLine = (s: RootState) => s.game.winningLine;
