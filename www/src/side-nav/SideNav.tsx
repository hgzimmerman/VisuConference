import * as React from "react";
import "./SideNav.css";
import { UncontrolledTooltip } from "reactstrap";
import * as FontAwesome from "react-fontawesome";
import Button from "reactstrap/lib/Button";
import {AddUserModalAndButton} from "../add-user-modal-and-button/AddUserModalAndButton";


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
              <li className="UserListElement">
                {/*<div className="Icon" id={"AddUser"}>*/}

                  <AddUserModalAndButton/>
                  {/*<Button id={"AddUser"} className="Icon">*/}
                    {/*<FontAwesome name="plus"/>*/}
                  {/*</Button>*/}
                {/*</div>*/}

              </li>
            </ul>
          </div>
        </div>

    );
  }

}