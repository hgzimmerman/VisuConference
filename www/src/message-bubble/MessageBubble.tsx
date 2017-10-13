import * as React from "react";
import "./MessageBubble.css";
import * as FontAwesome from "react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";

export interface MessageBubbleProps {
  text: string;
  fromUser: number; // todo make this a dedicated user
  // time: Date;
}

export class MessageBubble extends React.Component<MessageBubbleProps, object> {
  public text: string;
  public fromUser: number;
  // public time: Date;

  constructor(props: MessageBubbleProps) {
    super(props);

    this.text = props.text;
    this.fromUser = props.fromUser;
    // this.time = props.time;
  }

  render() {
    let bubble: JSX.Element;
    if ( this.fromUser === 0 ) {
      bubble = (
        <div className="MessageBubbleContainerRight" >
            <div className="Icon" id="TooltipRight">
              <FontAwesome name="pencil" />
            </div>
            <UncontrolledTooltip placement="left" target="TooltipRight">
              Edit message.
            </UncontrolledTooltip>

            <div className="MessageBubble GreenPill">
              {this.text}
          </div>
        </div>
      );
    } else {
      // its someone else
      bubble = (
        <div className="MessageBubbleContainerLeft" >
          <div className="MessageBubble BluePill">
            {this.text}
          </div>

          <div className="Icon" id="TooltipLeft">
                <FontAwesome name="flag" />
          </div>
          <UncontrolledTooltip placement="right" target="TooltipLeft">
            Flag message for changes.
          </UncontrolledTooltip>
        </div>
      );
    }

    return ( bubble );
  }
}