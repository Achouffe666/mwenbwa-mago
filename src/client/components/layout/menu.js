import React, {Component} from "react";
import myPhoto from "../../assets/images/myProfil.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MyMap from "../map/map";
import Lead from "../leadboard/leadboard";
import Game from "../gamelog/gamelog";

class Menu extends Component {
    render() {
        return (
            <Router>
                <div className={"menu"}>
                    <div className={"menu__filter"}>
                        <img
                            className={"menu__myPhoto"}
                            src={myPhoto}
                            alt={"photo"}
                        />
                        <p className={"menu__user"}>{"Maud Leleux"}</p>
                        <div className={"menu__link__letters"}>
                            <Link
                                to={"/play"}
                                className={
                                    "menu__link__letter menu__link__letter--a"
                                }>
                                {"Play"}
                            </Link>
                            <Link
                                to={"/leaderboard"}
                                className={
                                    "menu__link__letter menu__link__letter--b"
                                }>
                                {"LeaderBoard"}
                            </Link>
                            <Link
                                to={"/gamelog"}
                                className={
                                    "menu__link__letter menu__link__letter--c"
                                }>
                                {"Gamelog"}
                            </Link>
                            <p
                                className={
                                    "menu__link__letter menu__link__letter--d"
                                }>
                                {"TodoList"}
                            </p>
                        </div>
                    </div>
                    <div className={"menu__profil__bloc"}>
                        <input
                            type={"text"}
                            className={"menu__profil"}
                            placeholder={"Profil"}
                        />
                    </div>
                    <div className={"menu__link__bloc"}>
                        <div className={"menu__link"} />
                        <div className={"menu__link"} />
                        <div className={"menu__link"} />
                        <div className={"menu__link"} />
                    </div>
                    <Switch>
                        <Route exact path={"/play"} component={MyMap} />
                        <Route path={"/leaderboard"} component={Lead} />
                        <Route path={"/gamelog"} component={Game} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Menu;
