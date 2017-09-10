import * as React from 'react';
import './App.css';
import { MyNavbar } from './navbar/MyNavbar';
import {ChatWindow} from "./chat-window/ChatWindow";

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar/>
        <div className="Container">
          <div className="Sidenav"> Side nav stuff </div>
          <ChatWindow/>

        </div>
      </div>
    );
  }
}

export default App;
