import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center my-2">
        <img src="../usericon.png" className="h-8" />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};

export default ChatMessage;
