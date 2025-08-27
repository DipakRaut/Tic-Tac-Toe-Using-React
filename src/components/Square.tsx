import React from "react";

type Props = {
  value: "X" | "O" | null;
  onClick: () => void;
  highlight?: boolean;
};

const Square: React.FC<Props> = ({ value, onClick, highlight }) => {
  return (
    <button
      aria-label="board square"
      onClick={onClick}
      className={`flex items-center justify-center border rounded-2xl text-3xl sm:text-4xl font-semibold h-20 w-20 sm:h-24 sm:w-24 transition
        ${
          highlight
            ? "bg-emerald-100 border-emerald-400"
            : "bg-white hover:bg-gray-50 border-gray-300"
        }
        `}
    >
      {value}
    </button>
  );
};

export default Square;
