import * as React from "react";
import Picture from "./home";
import DisplayMenu from "../layout/header";

const HomeBackGround = () => (
    <div id={"body"}>
        <DisplayMenu />
        <Picture />
    </div>
);

export default HomeBackGround;
