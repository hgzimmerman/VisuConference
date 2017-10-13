import * as React from "react";
import "./SideNav.css";
import { UncontrolledTooltip } from "reactstrap";
import * as FontAwesome from "react-fontawesome";


export class SideNav extends React.Component {


  render() {
    return (
        <div className="Sidenav">
          <div className="SideNavTitle">
          Connected Users
          </div>
          <div>
            <ul className="UnorderedList">
              <li className="UserListElement YourUserElement">
                You
              </li>
              <li className="UserListElement OtherUserElement">
                User 2
              </li>
              <li>
                <div className="Icon" id={"AddUser"}>
                  <FontAwesome name="plus"/>
                </div>
                <UncontrolledTooltip placement="right" target={"AddUser"}>
                  Invite User
                </UncontrolledTooltip>
              </li>
            </ul>
          </div>
        </div>

    );
  }

}