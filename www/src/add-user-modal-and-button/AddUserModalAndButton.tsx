import * as React from "react";
import "./AddUserModalAndButton.css";
import { UncontrolledTooltip } from "reactstrap";
import * as FontAwesome from "react-fontawesome";
import Button from "reactstrap/lib/Button";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";


export interface AddUserModalAndButtonState {
  modal: boolean;
}

export class AddUserModalAndButton extends React.Component {
  public state: AddUserModalAndButtonState;

  constructor(props: any) {
    super(props);
    this.state = {
      modal: false
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
        <Button onClick={this.toggle} className="AddUserIcon" id={"AddUser"}>
          <FontAwesome name="plus"/>
        </Button>
        <UncontrolledTooltip placement="top" target={"AddUser"}>
          Invite Users
        </UncontrolledTooltip>


        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Invite Users</ModalHeader>
          <ModalBody>
            <div>
            Share this link to invite another user to this chat:
            </div>
            <div className={"ShareLink"}>
              VisuConference.com/chatrooms/12345
            </div>
          </ModalBody>
        </Modal>
    </div>
    );
  }

}