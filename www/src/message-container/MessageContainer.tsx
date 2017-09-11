import * as React from "react";
import { MessageBubble, MessageBubbleProps } from "../message-bubble/MessageBubble";
import "./MessageContainer.css";
import { connect } from "react-redux";
import { MessageStoreState } from "../chat-window/ChatWindow";



export interface MessageContainerProps {
  messages: Array<MessageBubbleProps>;
}


export const MessageContainer: React.SFC<MessageContainerProps> = (props) => {
  let { messages } = props;

  let bubbles = messages.map((message, index) => {
    return <MessageBubble key={index} text={message.text} fromUser={message.fromUser}/>;
  });

  return (
    <div className="MessageContainer">
      {
        bubbles
      }
    </div>
  );

};

const mapStateToProps = (state: MessageStoreState): MessageContainerProps => ({
  messages: state.listOfMessages
});

export const ConnectedMessageContainer = connect(mapStateToProps, {})(MessageContainer);

