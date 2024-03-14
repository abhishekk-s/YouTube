import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["Live", "Gaming", "All", "Cricket"];
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cooking" />
      <Button name="Football" />
      <Button name="News" />
    </div>
  );
};

export default ButtonList;
