import React from "react";

const Slide = ({ label, value, explanation, hovered }) => {
  return (
    <div
      className={`rounded-lg bg-gray-900 shadow p-4 flex flex-col items-center h-[32vh] ${
        hovered ? "cursor-pointer" : ""
      }`}
    >
      <p className="font-bold text-white mb-2">{label}</p>
      <div className="flex flex-col items-center">
        <p className="text-white text-2xl">{value}</p>
        <p className="text-gray-400 mt-2">{explanation}</p>
      </div>
    </div>
  );
};

export default Slide;
