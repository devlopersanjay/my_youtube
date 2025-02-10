import React from "react";

const ButtonList = () => {
  const arr = [
    "All",
    "Mixes",
    "Musics",
    "T-series",
    "News",
    "Live",
    "Podcast",
    "Gujarati",
  ];
  return (
    <div className="flex flex-row items-center mb-2">
      {arr.map((ele, ind) => {
        return (
          <button
            key={ind * Math.random(100, 999)}
            className="bg-gray-200 p-2 fo rounded-md font-medium mr-4 text-sm"
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
