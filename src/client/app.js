/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
import "./assets/style.css";
import * as React from "react";
import ReactDOM from "react-dom";

//import HeaderYellow from "./components/header";
import Picture from "./components/home";
import DisplayMenu from "./components/header";

ReactDOM.render(<DisplayMenu />, document.querySelector("#header"));
ReactDOM.render(<Picture />, document.querySelector("#main"));
