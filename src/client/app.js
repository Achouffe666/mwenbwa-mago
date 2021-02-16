/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */
import "leaflet/dist/leaflet.css";
import "./assets/style.scss";
import * as React from "react";
import ReactDOM from "react-dom";

import HomeBackGround from "./components/homebackground";
//import MyMap from "./components/map";

ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));
// ReactDOM.render(<MyMap />, document.querySelector("#main"));
