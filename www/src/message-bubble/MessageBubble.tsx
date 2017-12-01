import * as React from "react";
import "./MessageBubble.css";
import * as FontAwesome from "react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";
import { EditMessageModalAndButton } from "../edit-message-modal-and-button/EditMessageModalAndButton";
import { AppUserMessage } from "../datatypes/message";
import { MessageStoreActionEnum } from "../chat-window/ChatWindow";


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

    // Its you
    if ( this.message.user === 0 ) {
      bubble = (
        <div className="MessageBubbleContainerRightWrapper">
          <div className="MessageBubbleVerticalAlignment" >
            <EditMessageModalAndButton message={this.message} />
            <div className="MessageBubble GreenPill d-none d-sm-block"  id={"TT_Below-" + this.message.uuid}>
              {this.message.text}
            </div>
            <div className="FullWidthMessageBubble GreenPill d-sm-none" id={"TT_Below-" + this.message.uuid}>
              {this.message.text}
            </div>
            <UncontrolledTooltip placement="bottom" target={"TT_Below-" + this.message.uuid}>
              {this.message.username}
            </UncontrolledTooltip>
          </div>
        </div>
      );
    } else if ( this.message.user === 1 ) {
      // its unhelpful
      bubble = (
        <div className="MessageBubbleContainerLeftWrapper">
          <div className="MessageBubbleVerticalAlignment" >
            <div className={"MessageBubble BluePill d-none d-sm-block" + flaggedClass} id={"TT_Below-" + this.message.uuid}>
              {this.message.text}
            </div>
            <div className={"FullWidthMessageBubble BluePill d-sm-none" + flaggedClass} id={"TT_Below-" + this.message.uuid}>
              {this.message.text}
            </div>
            <UncontrolledTooltip placement="bottom" target={"TT_Below-" + this.message.uuid}>
              {this.message.username}
            </UncontrolledTooltip>


            <div className="Icon" id={"TooltipLeft-" + this.message.uuid} onClick={this.flagMessage}>
                  <FontAwesome name="flag"/>
            </div>
            <UncontrolledTooltip placement="right" target={"TooltipLeft-" + this.message.uuid}>
              Flag message for changes.
            </UncontrolledTooltip>
          </div>
        </div>
      );
    } else {
      // its helpful
      bubble = (
          <div className="MessageBubbleContainerLeftWrapper">
            <div className="MessageBubbleVerticalAlignment" >
              <div className={"MessageBubble PurplePill d-none d-sm-block" + flaggedClass} id={"TT_Below-" + this.message.uuid}>
                {this.message.text}
              </div>
              <div className={"FullWidthMessageBubble PurplePill d-sm-none" + flaggedClass} id={"TT_Below-" + this.message.uuid}>
                {this.message.text}
              </div>

              <UncontrolledTooltip placement="bottom" target={"TT_Below-" + this.message.uuid}>
                {this.message.username}
              </UncontrolledTooltip>

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