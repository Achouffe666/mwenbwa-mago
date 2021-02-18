import * as React from "react";
import Picture from "./home";
import DisplayMenu from "../layout/header";
import LeaderBoard from "../leaderboard/leaderBoard";

const HomeBackGround = () => (
    <div id={"body"}>
        <DisplayMenu />
        <LeaderBoard />
        <Picture />
    </div>
);

export default HomeBackGround;
