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
  message: AppUserMessage;
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
      message: props.message
    };

    this.toggle = this.toggle.bind(this);
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
    toBeEdited.text = "I like Apples";
    toBeEdited.uuid = this.state.message.uuid;

    this.context.store.dispatch(

      {
        type: MessageStoreActionEnum.EDIT_MESSAGE,
        message: toBeEdited
      }
    );
  }

  render() {
    return (
      <div>
        <div className={"Icon"} onClick={this.toggle}  id={"EditMessageButton" + this.state.message.uuid}>
          <FontAwesome name="pencil"/>
        </div>
        <UncontrolledTooltip placement="left" target={"EditMessageButton" + this.state.message.uuid}>
          Edit Message
        </UncontrolledTooltip>

        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Edit Message</ModalHeader>
          <ModalBody>
            <textarea rows={5} style={{width: "100%", backgroundColor: "gainsboro", color: "#242424"}} >
            {this.state.message.text}
            </textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.editMessage} color={"success"}>Save</Button> // TODO use a method to set this message's content higher up in the DOM tree.
            <Button onClick={this.toggle} color={"danger"}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}