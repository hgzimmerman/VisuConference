import * as React from "react";
import { MessageBubble, MessageBubbleProps } from "../message-bubble/MessageBubble";
import "./MessageContainer.css";
import { createStore } from "redux";
import { connect } from "react-redux";
import { MessageStoreState } from "../chat-window/ChatWindow";



export interface MessageContainerProps {
  messages: Array<MessageBubbleProps>;
}


export const MessageContainer: React.SFC<MessageContainerProps> = (props) => {
  let { messages, ... rest } = props;

  console.log("Before mapping, the length is: " + messages.length);
  console.log("raw messages" + JSON.stringify(messages));
  console.log("Before mapping, the length is: " + messages.length);
  let bubbles = messages.map((message, index) => {
    console.log("rendering index: " + index);
    console.log("messages length???: " + messages.length);
    return <MessageBubble key={index} text={message.text} fromUser={message.fromUser}/>;
  });

  return (
    <div className="MessageContainer">
      {
        // messageComponents
        bubbles
      }
    </div>
  );

};

const mapStateToProps = (state: MessageStoreState): MessageContainerProps => ({
  messages: state.listOfMessages
});

export const ConnectedMessageContainer = connect(mapStateToProps, {})(MessageContainer);

