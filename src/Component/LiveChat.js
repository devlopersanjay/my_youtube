import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeMessage } from "../Utils/helperChat";
import { FaComment } from "react-icons/fa";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeMessage(15),
        })
      );
    }, 1500);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveMessage) dispatch(addMessage(liveMessage));
  };

  return (
    <>
      <div id="secondary" className="w-full">
        <div className="h-[355px]  ml-2 p-2 border border-gray-400 bg-slate-200 rounded-t-md overflow-y-scroll flex flex-col-reverse">
          {messages.map((data, i) => {
            return (
              <ChatMessage key={i} name={data.name} message={data.message} />
            );
          })}
        </div>
        <form className="ml-2 flex w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-400 border-t-0 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            placeholder="Chat"
            onChange={(e) =>
              setLiveMessage({ name: "Sanjay", message: e.target.value })
            }
          />
          <button className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300">
            <FaComment />
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
