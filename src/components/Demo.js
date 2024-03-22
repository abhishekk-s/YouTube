import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);
  const prime = () => findNthPrime(text);
  const cachedPrime = useMemo(prime,[text]);

  console.log("Rendering ...");
  return (
    <div
      className={
        "border border-black m-4 p-2 w-[700px] h-[400px] rounded-lg " +
        (dark && "bg-gray-900 text-white")
      }
    >
      <input
        className="border border-black p-2 m-2 w-[400px] shadow-lg rounded-lg text-black"
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="p-2 font-bold text-xl">
        <h1>Nth Prime Number : {cachedPrime}</h1>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="border border-black p-2 m-2 w-[400px] bg-green-500 rounded-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Demo;
