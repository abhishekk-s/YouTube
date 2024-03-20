import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomNames, { generateRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(31),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  });

  //   const getChatData = async () => {
  //      const data = await ; API Call
  //   };
  return (
    <>
      <div className="border border-black h-[500px] pl-2 w-[470px] py-2 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((m, index) => (
          <ChatMessage key={index} name={m.name} message={m.message} />
        ))}
      </div>
      <form
        className="w-[470px] border border-black py-1 my-1 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "AKS",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className="border border-blue-700 w-[350px] rounded-lg mx-1 px-2"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="bg-green-300 px-2 mx-2 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
