import React from "react";
import { USER_ICON } from "../utils/Constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-md bg-gray-100 rounded-lg p-2 my-2">
      <img className="w-12 h-12" alt="user" src={USER_ICON} />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
