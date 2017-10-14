import * as React from "react";
// import "./AddUserModalAndButton.css";
import { UncontrolledTooltip } from "reactstrap";
import * as FontAwesome from "react-fontawesome";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";


export interface EditMessageModalAndButtonState {
  modal: boolean;
  uuid: string;
  messageContent: string;
}

export interface EditMessageModalAndButtonProps {
  uuid: string;
  messageContent: string;
}

export class EditMessageModalAndButton extends React.Component<EditMessageModalAndButtonProps, object> {
  public state: EditMessageModalAndButtonState;

  constructor(props: any) {
    super(props);
    this.state = {
      modal: false,
      uuid: props.uuid,
      messageContent: props.messageContent
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
            <textarea rows={5} style={{width: "100%", backgroundColor: "gainsboro", color: "#242424"}} >
            {this.state.messageContent}
            </textarea>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} color={"success"}>Save</Button> // TODO use a method to set this message's content higher up in the DOM tree.
            <Button onClick={this.toggle} color={"danger"}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}