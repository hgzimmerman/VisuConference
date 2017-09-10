import * as React from "react";
import { MessageBubble, MessageBubbleProps } from "../message-bubble/MessageBubble";
import "./MessageContainer.css";
import { createStore } from "redux";
import { connect } from "react-redux";
import {MessageStoreState} from "../chat-window/ChatWindow";


// export interface MessageStoreState {
//   listOfMessages: Array<MessageBubbleProps>;
// }
//
// export interface MessageStoreAction {
//   type: MessageStoreActionEnum;
//   message: MessageBubbleProps;
// }
//
// export enum MessageStoreActionEnum {
//   ADD_MESSAGE,
//   EDIT_MESSAGE,
//   DELETE_MESSAGE
// }
//
// let messageStore = createStore(
//   (state: MessageStoreState, action: MessageStoreAction) => {
//     switch (action.type) {
//       case MessageStoreActionEnum.ADD_MESSAGE:
//         return { listOfMessages: state.listOfMessages.push(action.message)};
//       default:
//         return state;
//     }
//   },
//   { listOfMessages: [] }
// );

// constructor(props: {}) {
//   super(props);
//   // this.listOfMessages.push({text : "Did you ever hear the tragedy of Darth Plagueis The Wise?", fromUser : 0});
//   // this.listOfMessages.push({text : "No?", fromUser : 1});
//   // this.listOfMessages.push({text : "I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side, he could even keep the ones he cared about from dying.", fromUser : 0});
//   // this.listOfMessages.push({text : "He could actually save people from death?", fromUser : 1});
//   // this.listOfMessages.push({text : "The dark side of the Force is a pathway to many abilities some consider to be unnatural. ", fromUser : 0});
//   // this.listOfMessages.push({text : "What happened to him?", fromUser : 1});
//   // this.listOfMessages.push({text : "He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.", fromUser : 0});
//   // this.listOfMessages.push({text : "Is it possible to learn this power?", fromUser : 1});
//   // this.listOfMessages.push({text : "Not from a Jedi.", fromUser : 0});
//
// }


// public listOfMessages: Array<MessageBubbleProps>;
// static contextTypes = {
//   store: React.PropTypes.object
// };
// context: any;
// private unsubscribe: Function;
//
// constructor(props: MessageContainerProps) {
//   super(props);
//   this.listOfMessages = props.messages;
// }
//
//
//
// componentDidMount() {
//   this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());  }
// componentWillUnmount() {
//   this.unsubscribe();
// }
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

