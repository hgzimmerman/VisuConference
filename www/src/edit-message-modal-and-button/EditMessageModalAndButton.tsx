import * as React from "react";
// import "./AddUserModalAndButton.css";
import { UncontrolledTooltip } from "reactstrap";
import * as FontAwesome from "react-fontawesome";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import { AppUserMessage } from "../datatypes/message";
import { MessageStoreActionEnum } from "../chat-window/ChatWindow";
import App from "../App";


export interface EditMessageModalAndButtonState {
  modal: boolean;
  text: string;
  uuid: string;
}

export interface EditMessageModalAndButtonProps {
  message: AppUserMessage;
}

export class EditMessageModalAndButton extends React.Component<EditMessageModalAndButtonProps, object> {
  public state: EditMessageModalAndButtonState;
  private unsubscribe: Function;

  static contextTypes = {
    store: React.PropTypes.object
  };
  context: any;

  constructor(props: EditMessageModalAndButtonProps) {
    super(props);
    this.state = {
      modal: false,
      text: props.message.text,
      uuid: props.message.uuid
    };

    this.toggle = this.toggle.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.editAndClose = this.editAndClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.unsubscribe();
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  editMessage() {
    let toBeEdited: AppUserMessage = new AppUserMessage();
    toBeEdited.text = this.state.text;
    toBeEdited.uuid = this.state.uuid;

    this.context.store.dispatch(
      {
        type: MessageStoreActionEnum.EDIT_MESSAGE,
        message: toBeEdited
      }
    );
  }

  editAndClose() {
    this.editMessage();
    this.toggle();
  }

  handleChange(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    this.setState({text: event.currentTarget.value});
  }


  render() {
    return (
      <div>
        <div className={"Icon"} onClick={this.toggle}  id={"EditMessageButton" + this.state.uuid}>
          <FontAwesome name="pencil"/>
        </div>
        <UncontrolledTooltip placement="left" target={"EditMessageButton" + this.state.uuid}>
          Edit Message
        </UncontrolledTooltip>

        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Edit Message</ModalHeader>
          <ModalBody>
            <textarea rows={5} style={{width: "100%", backgroundColor: "gainsboro", color: "#242424"}} value={this.state.text} onChange={this.handleChange} >
            {/*{this.state.message.text}*/}
            </textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.editAndClose} color={"success"}>Save</Button>
            <Button onClick={this.toggle} color={"danger"}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}