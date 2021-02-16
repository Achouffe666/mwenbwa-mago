/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
import "leaflet/dist/leaflet.css";
import "./assets/style.css";
import * as React from "react";
import ReactDOM from "react-dom";

import Register from "./components/register";

ReactDOM.render(<Register />, document.querySelector("#app"));
//import HeaderYellow from "./components/header";
import Picture from "./components/home";
import DisplayMenu from "./components/header";
//import HomeBackGround from "./components/homebackground";
import MyMap from "./components/map";

//ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));
ReactDOM.render(<MyMap />, document.querySelector("#main"));
