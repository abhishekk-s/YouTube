import React, { useEffect, useRef, useState } from "react";

const DemoR = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const z = useRef(0);
  const i = useRef(null);
 // let i = { current: null };
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("React " + Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  },[]);
  return (
    <div
      className={
        "border border-black my-4 mx-2 p-2 w-[700px] h-[400px] rounded-lg bg-slate-50 flex"
      }
    >
      <div>
        <button
          className="p-2 m-2 bg-green-300 rounded-lg border border-black"
          onClick={() => {
            x = x + 1;
            console.log("X=" + x); // Increases on button click but resets to 0 on re-render
          }}
        >
          Increase X
        </button>
        <h1 className="text-xl font-bold px-2">Let = {x}</h1>
      </div>
      <div>
        <button
          className="p-2 m-2 bg-green-300 rounded-lg border border-black"
          onClick={() => setY(y + 1)}
        >
          Increase Y
        </button>
        <h1 className="text-xl font-bold px-2">State = {y}</h1>
      </div>
      <div>
        <button
          className="p-2 m-2 bg-green-300 rounded-lg border border-black"
          onClick={() => {
            z.current = z.current + 1;
            console.log("Z=" + z.current);
          }}
        >
          Increase Z
        </button>
        <h1 className="text-xl font-bold px-2">Ref = {z.current}</h1>
      </div>
      <div>
        <button
          className="p-2 m-2 bg-red-900 rounded-lg text-white"
          onClick={() => {
            clearInterval(i.current);
          }}
        >
          STOP LOGGING
        </button>
      </div>
    </div>
  );
};

export default DemoR;
