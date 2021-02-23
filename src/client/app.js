/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * starter code by leny@BeCode
 * started at 18/05/2020
 * coded by The MAGO Team [ Maud & Austin & Gaëtan & Olivier ]
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import DisplayHeader from "../client/components/layout/header";
import FooterYellow from "../client/components/layout/footer";
//import HomeBackGround from "./components/home/homebackground";

ReactDOM.render(
    <div id={"body"}>
        <DisplayHeader />
        <FooterYellow />
    </div>,
    document.querySelector("#bodyBackground"),
);
//ReactDOM.render(<HomeBackGround />, document.querySelector("#bodyBackground"));
