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

  public state: {value: string};
  private unsubscribe: Function;

  constructor(props: {}) {
    super(props);

    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="ChatInput">
        <form onSubmit={this.handleSubmit} className="d-flex">
          <input className="Input form-control" type="text" placeholder="Chat" value={this.state.value} onChange={this.handleChange} />

          <div className="btn-group dropup" >
            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <div>
                <FontAwesome style={{color: "red"}} name="dot-circle-o"/>
                Currently Recording
              </div>
              {/*{JSON.stringify(this.context.store) + "hello"}*/}
            </div>
            <button type="submit" className="btn btn-light SendButtons">Send</button>
          </div>
        </form>

      </div>

    );
  }
}