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

import Register from "./components/register";

ReactDOM.render(<Register />, document.querySelector("#app"));
