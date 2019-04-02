import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

//ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <Router basename={process.env.PUBLIC_URL}>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
