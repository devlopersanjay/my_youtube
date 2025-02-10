import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <>
      <div
        id="secondary"
        className="w-full h-[400px]  ml-2 p-2 border border-gray-400 bg-slate-200 rounded-lg"
      >
        <ChatMessage name="Sanjay" message="Lorem lorem" />
        <ChatMessage name="Sanjay" message="Lorem lorem" />
        <ChatMessage name="Sanjay" message="Lorem lorem" />
        <ChatMessage name="Sanjay" message="Lorem lorem" />
        <ChatMessage name="Sanjay" message="Lorem lorem" />
      </div>
    </>
  );
};

export default LiveChat;
