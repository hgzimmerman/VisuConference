import * as React from "react";
import "./SideNav.css";


export class SideNav extends React.Component {


  render() {
    return (
        <div className="Sidenav">
          <div className="SideNavTitle">
          Connected Users:
          </div>
          <div>
            <ul className="UnorderedList">
              <li className="UserListElement">
                You
              </li>
              <li className="UserListElement">
                User 2
              </li>
            </ul>
          </div>
        </div>

    );
  }

}