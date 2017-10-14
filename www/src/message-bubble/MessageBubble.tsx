import * as React from "react";
import "./MessageBubble.css";
import * as FontAwesome from "react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";
import { EditMessageModalAndButton } from "../edit-message-modal-and-button/EditMessageModalAndButton";
import { AppUserMessage } from "../datatypes/message";
import {MessageStoreActionEnum} from "../chat-window/ChatWindow";



export interface MessageBubbleProps {
  message: AppUserMessage;
}

export class MessageBubble extends React.Component<MessageBubbleProps, object> {
  static contextTypes = {
    store: React.PropTypes.object
  };
  context: any;

  public message: AppUserMessage;

  constructor(props: MessageBubbleProps) {
    super(props);

    this.message = props.message;

    this.flagMessage = this.flagMessage.bind(this);
  }


  flagMessage() {
    let toBeFlagged: AppUserMessage = new AppUserMessage();
    toBeFlagged.uuid = this.message.uuid;

    this.context.store.dispatch(
      {
        type: MessageStoreActionEnum.TOGGLE_FLAG_MESSAGE,
        message: toBeFlagged
      }
    );
  }


  render() {
    let bubble: JSX.Element;

    let flaggedClass = "";
    if (this.message.flagged) {
      flaggedClass = " Flagged"; // Append the flagged status to the css classes
    }

    if ( this.message.user === 0 ) {
      bubble = (
        <div className="MessageBubbleContainerRightWrapper">
          <div className="MessageBubbleVerticalAlignment" >
            <EditMessageModalAndButton message={this.message} />
              {/*<div className="Icon" id={"TooltipRight-" + this.messageUuid}>*/}
                {/*<FontAwesome name="pencil" />*/}
              {/*</div>*/}
              {/*<UncontrolledTooltip placement="left" target={"TooltipRight-" + this.messageUuid}>*/}
                {/*Edit message.*/}
              {/*</UncontrolledTooltip>*/}

              <div className="MessageBubble GreenPill">
                {this.message.text}
            </div>
          </div>
        </div>
      );
    } else {
      // its someone else
      bubble = (
        <div className="MessageBubbleContainerLeftWrapper">
          <div className="MessageBubbleVerticalAlignment" >
            <div className={"MessageBubble BluePill" + flaggedClass}>
              {this.message.text}
            </div>
            <div className="Icon" id={"TooltipLeft-" + this.message.uuid} onClick={this.flagMessage}>
                  <FontAwesome name="flag"/>
            </div>
            <UncontrolledTooltip placement="right" target={"TooltipLeft-" + this.message.uuid}>
              Flag message for changes.
            </UncontrolledTooltip>
          </div>
        </div>
      );
    }

    return ( bubble );
  }
}