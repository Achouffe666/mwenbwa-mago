/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import DisplayHeader from "../client/components/layout/header";
import FooterYellow from "../client/components/layout/footer";
//import HomeBackGround from "./components/home/homebackground";

ReactDOM.render(
    <div>
        <DisplayHeader />
        <FooterYellow />
    </div>,
    document.querySelector("#bodyBackground"),
);

// ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));
// ReactDOM.render(<Register />, document.querySelector("#app"));
//ReactDOM.render(<MyMap />, document.querySelector("#main"));
