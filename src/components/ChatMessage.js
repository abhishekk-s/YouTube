import React from "react";
import { USER_ICON } from "../utils/Constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center pt-2 shadow-sm">
      <img className="h-9 px-1" alt="user-icon" src={USER_ICON} />
      <span className="px-1 font-semibold">{name} :</span>
      <span className=" font-light px-1">{message}</span>
    </div>
  );
};

export default ChatMessage;
