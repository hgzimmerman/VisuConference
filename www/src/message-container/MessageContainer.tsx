import * as React from "react";
import { MessageBubble } from "../message-bubble/MessageBubble";
import "./MessageContainer.css";
import { connect } from "react-redux";
import { MessageStoreState } from "../chat-window/ChatWindow";
import { AppUserMessage } from "../datatypes/message";



export interface MessageContainerProps {
  messages: Array<AppUserMessage>;
}


export const MessageContainer: React.SFC<MessageContainerProps> = (props) => {
  let { messages } = props;

  let bubbles = messages.map((message, index) => {
    return <MessageBubble key={index} message={message}/>;
  });

  return (
    <div className="MessageContainer" id="Messages">
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

