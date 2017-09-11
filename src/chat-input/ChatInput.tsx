import * as React from "react";
import "./ChatInput.css";
import { MessageBubbleProps } from "../message-bubble/MessageBubble";
import { MessageStoreActionEnum } from "../chat-window/ChatWindow";







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
          message: {
            text: this.state.value,
            fromUser: 0 // 0 represents the "self" (left) user for the moment
          }
        }
      );
    }

  }

  render() {
    return (
      <div className="ChatInput">
        <form onSubmit={this.handleSubmit} className="d-flex">
          <input className="form-control" type="text" placeholder="Chat" value={this.state.value} onChange={this.handleChange} />
          <button className="btn btn-secondary">Send</button>
        </form>
      </div>
    );
  }
}