import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="w-1/6 p-2 shadow-lg">
      <ul>
        <Link to="/">
          <li className="p-2 bg-gray-200 rounded-md font-medium text-md flex items-center">
            <BiHomeAlt /> <span className="mx-2">Home</span>
          </li>
        </Link>
        <li className="p-2 font-medium text-sm">Shorts</li>
        <li className="p-2 font-medium text-sm">Videos</li>
        <li className="p-2 font-medium text-sm">Live</li>
      </ul>
      <h3 className="font-bold pt-5">Subscription</h3>
      <ul>
        <li className="p-2 font-medium text-sm">Music</li>
        <li className="p-2 font-medium text-sm">Sport</li>
        <li className="p-2 font-medium text-sm">Gaming</li>
        <li className="p-2 font-medium text-sm">Movie</li>
      </ul>
      <h3 className="font-bold pt-5">Watch Later</h3>
      <ul>
        <li className="p-2 font-medium text-sm">Music</li>
        <li className="p-2 font-medium text-sm">Sport</li>
      </ul>
    </div>
  );
};

export default Sidebar;
