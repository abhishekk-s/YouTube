import React, { useEffect, useState } from "react";
import {
  LOGO,
  MENU_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
      else searchSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const searchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-9 px-2 mx-2 cursor-pointer"
          alt="menu-icon"
          src={MENU_ICON}
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img className="h-9 rounded-lg" alt="logo" src={LOGO} />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="border border-gray-400 rounded-l-full w-1/2 px-3 py-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.lenght !== 0 && (
          <div className=" absolute bg-white mx-2 py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-50">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-9" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
