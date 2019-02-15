import React from "react";
import MessageList from "./MessageList";

const Message = ({
  message,
  userStarredMessage,
  userSelectedMessage,
  userReadMessage
}) => {
  let labelList = message.label.map((label, index) => {
    return <span className="label label-warning"> {label} </span>;
  });

  return (
    <div>
      <div
        className={`row message ${message.read ? "read" : "unread"} ${
          message.selected ? "selected" : ""
        } `}
      >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={message.selected}
                onChange={() => userSelectedMessage(message)}
              />{" "}
            </div>{" "}
            <div className="col-xs-2">
              <i
                className={`star fa fa-star${message.starred ? "" : "-o"}`}
                onClick={() => userStarredMessage(message)}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-xs-11" onClick={() => userReadMessage(message)}>
          {" "}
          {labelList}{" "}
          <a href="http://google.com">
            {" "}
            {message.subject}
            Here is some message text that has a bunch of stuff{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Message;
