import * as React from "react";
import "./MessageBubble.css";
import * as FontAwesome from "react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";
// import * from "uuid-js";
var uuid = require("uuid-js");
// import {Uuid} from "uuid-js";

export interface MessageBubbleProps {
  text: string;
  fromUser: number; // todo make this a dedicated user
  // time: Date;
}

export class MessageBubble extends React.Component<MessageBubbleProps, object> {
  public text: string;
  public fromUser: number;
  // public time: Date;
  public messageUuid: string;

  constructor(props: MessageBubbleProps) {
    super(props);

    this.text = props.text;
    this.fromUser = props.fromUser;
    this.messageUuid = uuid.create().toString(); // This uuid is used to allow the tooltip to create a unique id target
    // this.time = props.time;
  }

  render() {
    let bubble: JSX.Element;
    if ( this.fromUser === 0 ) {
      bubble = (
        <div className="MessageBubbleContainerRightWrapper">
          <div className="MessageBubbleVerticalAlignment" >
              <div className="Icon" id={"TooltipRight-" + this.messageUuid}>
                <FontAwesome name="pencil" />
              </div>
              <UncontrolledTooltip placement="left" target={"TooltipRight-" + this.messageUuid}>
                Edit message.
              </UncontrolledTooltip>

              <div className="MessageBubble GreenPill">
                {this.text}
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
              {this.text}
            </div>
            <div className="Icon" id={"TooltipLeft-" + this.messageUuid}>
                  <FontAwesome name="flag"/>
            </div>
            <UncontrolledTooltip placement="right" target={"TooltipLeft-" + this.messageUuid}>
              Flag message for changes.
            </UncontrolledTooltip>
          </div>
        </div>
      );
    }

    return ( bubble );
  }
}