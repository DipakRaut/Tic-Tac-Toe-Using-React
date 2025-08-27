import React from "react";
import StatusBar from "./components/StatusBar";
import Board from "./components/Board";
import Controls from "./components/Controls";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-5 sm:p-7">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Tic-Tac-Toe
        </h1>
        <StatusBar />
        <div className="flex justify-center my-4">
          <Board />
        </div>
        <Controls />
        <p className="text-center text-xs text-gray-500 mt-6">
          Local two-player game.
        </p>
      </div>
    </div>
  );
};

export default App;
