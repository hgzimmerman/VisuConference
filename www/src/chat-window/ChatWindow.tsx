import * as React from "react";
import "./chatwindow.css";
import { ChatInput } from "../chat-input/ChatInput";
import { ConnectedMessageContainer, MessageContainer } from "../message-container/MessageContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AppUserMessage } from "../datatypes/message";
import { Networking } from "../networking/fetchText";
import { isUndefined } from "util";





export interface MessageStoreState {
  listOfMessages: Array<AppUserMessage>;
}

export interface MessageStoreAction {
  type: MessageStoreActionEnum;
  message: AppUserMessage;
}

export enum MessageStoreActionEnum {
  ADD_MESSAGE,
  TOGGLE_FLAG_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
}


let messageStore = createStore(
  (state: MessageStoreState, action: MessageStoreAction) => {
    switch (action.type) {
      case MessageStoreActionEnum.ADD_MESSAGE:
        let newList: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list
        newList.push(action.message);
        // This currently adds a network-request message whenever a normal message is entered, it is an end goal for the network requests to happen when another event triggers it (ie a button, or detecting voice).
        Networking.fetchTrumpText().then(
          message => {
            newList.push(message);
            let messageScrollingSection: HTMLElement | null = document.getElementById("Messages");
            if (messageScrollingSection != null) {
              messageScrollingSection.scrollTop = messageScrollingSection.scrollHeight;
            }
          }
        );
        return { listOfMessages: newList};

      case MessageStoreActionEnum.TOGGLE_FLAG_MESSAGE:
        let existingMatchingMessage: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingMatchingMessage) ) {
          existingMatchingMessage.flagged = !existingMatchingMessage.flagged;
          let newList1: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList1};
        } else {
          return { listOfMessages: state.listOfMessages};
        }

      case MessageStoreActionEnum.EDIT_MESSAGE:
        let existingM: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingM) ) {
          existingM.text = action.message.text;
          let newList2: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList2};
        } else {
          return { listOfMessages: state.listOfMessages};
        }

      default:
        return state;
    }
  },
  { listOfMessages: [
    // TODO: get rid of these default values
    // {text : "Did you ever hear the tragedy of Darth Plagueis The Wise?", fromUser : 0},

    // {text : "Your text", fromUser : 0},

    // {text : "Their text", fromUser : 1},
    
    // {text : "Your text again", fromUser : 0},

    // {text : "No?", fromUser : 1},
    // {text : "I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side, he could even keep the ones he cared about from dying.", fromUser : 0},
    // {text : "He could actually save people from death?", fromUser : 1},
    // {text : "The dark side of the Force is a pathway to many abilities some consider to be unnatural. ", fromUser : 0},
    // {text : "What happened to him?", fromUser : 1},
    // {text : "He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.", fromUser : 0},
    // {text : "Is it possible to learn this power?", fromUser : 1},
    // {text : "Not from a Jedi.", fromUser : 0}
    ]
  }
);



export class ChatWindow extends React.Component {

  constructor(props: {}) {
      super(props);
  }

  render() {
    return (
      <Provider store={messageStore}>
        <div className="ChatWindow">
          <ConnectedMessageContainer />
          <div className="BottomContainer">
            <ChatInput/>
          </div>
        </div>
      </Provider>
    );
  }
}
