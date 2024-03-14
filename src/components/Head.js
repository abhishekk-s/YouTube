import React from "react";
import { LOGO, MENU_ICON, USER_ICON } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
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
      <div className="flex col-span-10 content-center">
        <input
          className="border border-gray-400 rounded-l-full w-1/2 px-3"
          type="text"
        />
        <button className=" border border-gray-400 rounded-r-full py-2 px-4 bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-9" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
