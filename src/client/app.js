/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
// import "./assets/style.css";

// import HomeBackGround from "./components/home/homebackground";
// //import MyMap from "./components/map/map";

// ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));
// //ReactDOM.render(<MyMap />, document.querySelector("#main"));

// =====================================
import "./assets/leaderboard.css";

import LeaderBoard from "./components/leaderboard/leaderboard";

ReactDOM.render(<LeaderBoard />, document.querySelector("#bodyBackground"));
