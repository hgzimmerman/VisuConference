import * as React from "react";
import "./ChatInput.css";
import { MessageBubbleProps } from "../message-bubble/MessageBubble";
import { MessageStoreActionEnum } from "../chat-window/ChatWindow";
import * as FontAwesome from "react-fontawesome";
import { AppUserMessage } from "../datatypes/message";



export class ChatInput extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };
  context: any;

  public state: {
    value: string
    isRecording: boolean
  };
  private unsubscribe: Function;

  constructor(props: {}) {
    super(props);

    this.state = {
      value: "",
      isRecording: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleRecording = this.handleToggleRecording.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({value: event.currentTarget.value});
  }



  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Only send the message if it contains text
    if (this.state.value !== "") {
      // Reset the input box
      this.setState({value: ""});
      // send the message
      this.context.store.dispatch(
        {
          type: MessageStoreActionEnum.ADD_MESSAGE,
          message: AppUserMessage.fromUserGeneratedText(this.state.value)
        }
      );
    }
  }

  handleToggleRecording() {
    this.setState( {
        value: this.state.value,
        isRecording: !this.state.isRecording
      }
    );
  }

  render() {

    let recordingEntry;
    if (this.state.isRecording) {
      recordingEntry = (
        <div className={"dropdown-item"} onClick={this.handleToggleRecording}>
          Recording
          <FontAwesome className="Icon" style={{color: "red"}} name="dot-circle-o"/>
      </div>
      );
    } else {
      recordingEntry = (
        <div className={"dropdown-item"} onClick={this.handleToggleRecording}>
          Not Recording
          <FontAwesome className="Icon" style={{color: "gray"}} name="dot-circle-o"/>
      </div>
      );
    }

    return (
      <div className="ChatInput">
        <form onSubmit={this.handleSubmit} className="d-flex">
          <input className="Input form-control" type="text" placeholder="Chat" value={this.state.value} onChange={this.handleChange} />

          <div className="btn-group dropup" >
            <button type="button" className="btn btn-light dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
              <FontAwesome name="cog"/>
            </button>
            <div className="dropdown-menu">
              {recordingEntry}
              <div className={"dropdown-item"}>
                Text To Speech Off
                <FontAwesome className="Icon" style={{color: "gray"}} name="volume-off"/>
              </div>
            </div>
            <button type="submit" className="btn btn-light SendButtons">Send</button>
          </div>
        </form>

      </div>

    );
  }
}