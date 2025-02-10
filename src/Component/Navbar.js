import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { BsSearch } from "react-icons/bs";
import { YOUTUBE_SEARCHQUERY_API } from "../Utils/Constant";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  /**
   *  Dummy Object of suggestion result
   *  searchCache = {
   *    "iphone" : ["iphone 13", "iphone 12", ]
   *  }
   *
   *  searchQuery = iphone
   *
   */

  useEffect(() => {
    // Make an api call after every key press
    // but if the difference between 2 APi call is < 200 ms
    // decline api call this concept is debouncing
    const timer = setTimeout(() => {
      console.log("----cache-----", searchCache);
      if (searchCache[searchQuery]) {
        //console.log("--------v-if---------");
        setSuggestions(searchCache[searchQuery]);
      } else {
        //console.log("--------v-else------------");
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    console.log("API call = " + searchQuery);
    const response = await fetch(YOUTUBE_SEARCHQUERY_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
    //update chache
    // dispatch(
    //   cacheResults({
    //     [searchQuery]: json[1],
    //   })
    // );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="grid grid-flow-col px-4 pt-1 pb-5 bg-white shadow-lg sticky w-full top-0">
      <div className="col-span-1 flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer"
          src="../hamburger-menu.png"
          alt="menu"
        />
        <img src="../youtube-logo-icon.svg" className="h-5 mx-3 pl-4" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 border border-gray-400 border-r-0 px-4 py-2 rounded-l-full"
          />
          <button
            name="search"
            className="border border-gray-400 px-5 pt-2.5 pb-3.5 rounded-r-full bg-gray-100"
          >
            <BsSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white px-3 pb-2 w-[29rem] shadow-md rounded-lg">
            <ul>
              {suggestions.length > 0 &&
                suggestions.map((suggest) => {
                  return (
                    <li
                      key={suggest}
                      className="py-2 px-3 shadow-sm hover:bg-gray-200 flex items-center space-x-2"
                    >
                      <BsSearch />
                      <span>{suggest}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img src="../usericon.png" className="h-8" />
      </div>
    </div>
  );
};

export default Navbar;
