/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * starter code by leny@BeCode
 * started at 18/05/2020
 * coded by The MAGO Team [ Maud & Austin & Gaëtan & Olivier ]
 */
import "leaflet/dist/leaflet.css";
import "./assets/style.scss";
import * as React from "react";
import ReactDOM from "react-dom";
//import "./assets/style.scss";

// import HomeBackGround from "./components/home/homebackground";
// ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));

import MapViewer from "./components/map/mapview";
ReactDOM.render(<MapViewer />, document.querySelector("#bodyBackground"));
