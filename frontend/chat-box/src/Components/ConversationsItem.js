import React from "react";
import "./myStyle.css";

import { Navigate, useNavigate } from "react-router-dom";

export default function ConversationsItem({ props }) {
  const navigate = useNavigate();
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon"> {props.name[0]}</p>
      <p className="con-title"> {props.name}</p>
      <p className="con-lastMessage"> {props.lastmessage}</p>
      <p className="con-timeStamp"> {props.timeStamp}</p>
    </div>
  );
}
