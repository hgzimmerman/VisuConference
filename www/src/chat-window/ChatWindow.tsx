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
  isRecording: boolean;
}

export interface MessageStoreAction {
  type: MessageStoreActionEnum;
  message: AppUserMessage;
}

export enum MessageStoreActionEnum {
  ADD_MESSAGE,
  TOGGLE_FLAG_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  TOGGLE_RECORDING
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
        return { listOfMessages: newList, isRecording: state.isRecording};

      case MessageStoreActionEnum.TOGGLE_FLAG_MESSAGE:
        let existingMatchingMessage: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingMatchingMessage) ) {
          existingMatchingMessage.flagged = !existingMatchingMessage.flagged;
          let newList1: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList1};
        } else {
          return { listOfMessages: state.listOfMessages, isRecording: state.isRecording};
        }

      case MessageStoreActionEnum.EDIT_MESSAGE:
        let existingM: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingM) ) {
          existingM.text = action.message.text;
          let newList2: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList2, isRecording: state.isRecording};
        } else {
          return { listOfMessages: state.listOfMessages, isRecording: state.isRecording};
        }

      case MessageStoreActionEnum.TOGGLE_RECORDING:
        return { listOfMessages: state.listOfMessages, isRecording: !state.isRecording};

      default:
        return state;
    }
  },
  {
    listOfMessages: [ ],
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
