import * as React from "react";
import "./Info.css";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import Button from "reactstrap/lib/Button";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-fontawesome";



class InfoState {
  collapsed: boolean;
}

export class Info extends React.Component {

  public state: InfoState;

  constructor(props: {}) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className={"ml-auto nav-item"}>
        <FontAwesome className="InfoIcon" onClick={this.toggle} size="2x" name="info-circle"/>

        <Modal isOpen={!this.state.collapsed} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Information</ModalHeader>
          <ModalBody>
            <p>
              VisuConference is intended to be used in groups of mixed hearing and Deaf/Hard of Hearing team members.
              The app will increase the ease of conversation in these groups by using a microphone to record an ongoing meeting and transcribing the conversation into a chat log.
              Because Voice to text systems are not 100% reliable, the app offers a way for D/HH members to flag a message as unreadable, and a way for the speaker to edit their message.
              D/HH users can use VisuConference by typing messages and having the app read them out loud to the group (not implemented).
            </p>
            <p>
              As this is a prototype, the voice detection and transcription is mocked, replying with messages automatically when you send a message yourself.
              If your message is a known phrase, your Helpful Collaborator will respond with a reasonable message, but if your message is an unknown phrase, your Unhelpful Collaborator will chime in with nonsense.
            </p>
            <p>
              Flag the messages from your Unhelpful Collaborator so they know they need to edit their messages.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} color={"danger"}>Close</Button>
          </ModalFooter>
        </Modal>

      </div>
    );

  }
}
































