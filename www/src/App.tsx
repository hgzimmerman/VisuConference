import * as React from "react";
import "./App.css";
import { MyNavbar } from "./navbar/MyNavbar";
import { ChatWindow } from "./chat-window/ChatWindow";
import { SideNav } from "./side-nav/SideNav";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <div className="Container">
          {/*<div className="Sidenav"> Users in chat. </div>*/}
          <SideNav/>
          <ChatWindow/>

        </div>
      </div>
    );
  }
}

export default App;
