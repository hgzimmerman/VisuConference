import * as React from "react";
import "./chatwindow.css";
import { ChatInput } from "../chat-input/ChatInput";
import { ConnectedMessageContainer, MessageContainer } from "../message-container/MessageContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { AppUserMessage } from "../datatypes/message";
import { Networking } from "../networking/fetchText";
import { isUndefined } from "util";
import { talk } from "../speech/speech";




export interface MessageStoreState {
  listOfMessages: Array<AppUserMessage>;
  isRecording: boolean;
  replacementWordsIndex: number;
}

export interface MessageStoreAction {
  type: MessageStoreActionEnum;
  message: AppUserMessage;
}

export enum MessageStoreActionEnum {
  ADD_MESSAGE,
  RECEIVE_MESSAGE,
  TOGGLE_FLAG_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  TOGGLE_RECORDING
}

const replacementWords = [
  "Hello",
  "Goodbye"
];

let messageStore = createStore(
  (state: MessageStoreState, action: MessageStoreAction) => {
    switch (action.type) {
      case MessageStoreActionEnum.ADD_MESSAGE:

        let nextIndex: number;
        if (action.message.text === "/q") {
          action.message.text = replacementWords[state.replacementWordsIndex];
          nextIndex = (state.replacementWordsIndex + 1 ) % replacementWords.length;
        } else {
          nextIndex = state.replacementWordsIndex;
        }

        let newList: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list
        newList.push(action.message);



        // talk(action.message.text);
        // This currently adds a network-request message whenever a normal message is entered, it is an end goal for the network requests to happen when another event triggers it (ie a button, or detecting voice).
        Networking.fetchTrumpText(action.message.text).then(
          message => {
            // newList.push(message);
            messageStore.dispatch(
                {
                  type: MessageStoreActionEnum.RECEIVE_MESSAGE,
                  message: message
                }
            );


            let messageScrollingSection: HTMLElement | null = document.getElementById("Messages");
            if (messageScrollingSection != null) {
              messageScrollingSection.scrollTop = messageScrollingSection.scrollHeight;
            }
          }
        );
        return {
          listOfMessages: newList,
          isRecording: state.isRecording,
          replacementWordsIndex: nextIndex
        };

      case MessageStoreActionEnum.RECEIVE_MESSAGE:
        let newList1: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list
        newList1.push(action.message);

        let messageScrollingSection1: HTMLElement | null = document.getElementById("Messages");
        if (messageScrollingSection1 != null) {
          messageScrollingSection1.scrollTop = messageScrollingSection1.scrollHeight;
        }
        return { listOfMessages: newList1, isRecording: state.isRecording, replacementWordsIndex: state.replacementWordsIndex};

      case MessageStoreActionEnum.TOGGLE_FLAG_MESSAGE:
        let existingMatchingMessage: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingMatchingMessage) ) {
          existingMatchingMessage.flagged = !existingMatchingMessage.flagged;
          let newList1: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList1, isRecording: state.isRecording, replacementWordsIndex: state.replacementWordsIndex};
        } else {
          return { listOfMessages: state.listOfMessages, isRecording: state.isRecording, replacementWordsIndex: state.replacementWordsIndex};
        }

      case MessageStoreActionEnum.EDIT_MESSAGE:
        let existingM: AppUserMessage | undefined = state.listOfMessages.find((element) => {
          return element.uuid === action.message.uuid;
        });

        if ( !isUndefined(existingM) ) {
          existingM.text = action.message.text;
          let newList2: Array<AppUserMessage> = state.listOfMessages.slice(0); // copy the existing list

          return { listOfMessages: newList2, isRecording: state.isRecording, replacementWordsIndex: state.replacementWordsIndex};
        } else {
          return { listOfMessages: state.listOfMessages, isRecording: state.isRecording, replacementWordsIndex: state.replacementWordsIndex};
        }

      case MessageStoreActionEnum.TOGGLE_RECORDING:
        return { listOfMessages: state.listOfMessages, isRecording: !state.isRecording, replacementWordsIndex: state.replacementWordsIndex};

      default:
        return state;
    }
  },
  {
    listOfMessages: [ ],
    isRecording: true,
    replacementWordsIndex: 0
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
