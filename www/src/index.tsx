// import "jquery/src/jquery";
import "jquery";
import "popper.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
// To import bootstrap here, you need tether, but tether can't be imported without webpack, which this project doesn't use.
// So in public/index.html, there is a script to get the tether source. That will run before anything here, allowing bootstrap to work.
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();


