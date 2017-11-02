import * as React from "react";
import "./SideNav.css";
import "bootstrap/dist/css/bootstrap.css";
import { AddUserModalAndButton } from "../add-user-modal-and-button/AddUserModalAndButton";


export class SideNav extends React.Component {


  render() {
    return (
        <div className="">
          <div className="SideNavTitle">
          Connected Users
          </div>
          <div>
            <ul className="UnorderedList">
              <li className="UserListElement YourUserElement">
                You
              </li>
              <li className="UserListElement OtherUserElement">
                Unhelpful Collaborator
              </li>
              <li className="UserListElement ThirdUserElement">
                Helpful Collaborator
              </li>
              <li className="UserListElement">
                  <AddUserModalAndButton/>
              </li>
            </ul>
          </div>
        </div>

    );
  }

}