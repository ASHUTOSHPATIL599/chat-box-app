import React from "react";

export default function MessageOthers() {
  var props1 = { name: "OtherUser", message: "tis is sample message" };

  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="con-icon"> {props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title"> {props1.name}</p>
          <p className="con-lastMessage"> {props1.message}</p>
          <p className="con-timeStamp">12.00pm</p>
        </div>
      </div>
    </div>
  );
}
