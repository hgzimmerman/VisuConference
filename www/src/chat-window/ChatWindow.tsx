import * as React from "react";
import "./chatwindow.css";
import { ChatInput } from "../chat-input/ChatInput";
import { MessageBubbleProps } from "../message-bubble/MessageBubble";
import { ConnectedMessageContainer, MessageContainer } from "../message-container/MessageContainer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
// import rootReducer from "../reducers";




export interface MessageStoreState {
  listOfMessages: Array<MessageBubbleProps>;
}

export interface MessageStoreAction {
  type: MessageStoreActionEnum;
  message: MessageBubbleProps;
}

export enum MessageStoreActionEnum {
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
}

async function fetchAsyncText (): Promise<MessageBubbleProps> {
  const response = await fetch("http://localhost:8000/trump/4");
  return await response.json();
}


let messageStore = createStore(
  (state: MessageStoreState, action: MessageStoreAction) => {
    switch (action.type) {
      case MessageStoreActionEnum.ADD_MESSAGE:
        let newList: Array<MessageBubbleProps> = state.listOfMessages.slice(0); // copy the existing list
        newList.push(action.message);
        // const res = await fetch("http://localhost:8000/text/10");
        // const json = await res.json();
        // let b: MessageBubbleProps = json as MessageBubbleProps;
        fetchAsyncText().then(
          message => {
            newList.push(message);
            let messageScrollingSection: HTMLElement | null = document.getElementById("Messages");
            if (messageScrollingSection != null) {
              messageScrollingSection.scrollTop = messageScrollingSection.scrollHeight;
            }
          }
        );
        return { listOfMessages: newList};
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
