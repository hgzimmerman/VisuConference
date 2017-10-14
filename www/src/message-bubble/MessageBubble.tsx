import * as React from "react";
import "./MessageBubble.css";
import * as FontAwesome from "react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";
import { EditMessageModalAndButton } from "../edit-message-modal-and-button/EditMessageModalAndButton";
import { AppUserMessage } from "../datatypes/message";



export interface MessageBubbleProps {
  message: AppUserMessage;
}

export class MessageBubble extends React.Component<MessageBubbleProps, object> {
  // public text: string;
  // public fromUser: number;
  // // public time: Date;
  // public messageUuid: string;
  public message: AppUserMessage;

  constructor(props: MessageBubbleProps) {
    super(props);

    this.message = props.message;
    // this.text = props.text;
    // this.fromUser = props.fromUser;
    // this.messageUuid = uuid.create().toString(); // This uuid is used to allow the tooltip to create a unique id target
    // this.time = props.time;
  }

  render() {
    let bubble: JSX.Element;
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
            <div className="MessageBubble BluePill">
              {this.message.text}
            </div>
            <div className="Icon" id={"TooltipLeft-" + this.message.uuid}>
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