import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch, faBars} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import DisplayMenu from "./menu";
import MyMap from "../map/map";
import Lead from "../leadboard/leadboard";
import Game from "../gamelog/gamelog";
import HomeBackGround from "../home/homebackground";
import Register_field from "../register/register";

function DisplayHeader() {
    const [open, setOpen] = useState(false);
    function openMenu() {
        if (open === false) {
            setOpen(true);
            document.querySelector(".menu").style.display = "flex";
        } else if (open === true) {
            setOpen(false);
            document.querySelector(".menu").style.display = "none";
        }
    }
    return (
        <Router>
            <div className={"navbar"}>
                <div className={"navbar__bloc--title"}>{"Green Grabber"}</div>
                <div className={"navbar__bloc--home"}>
                    <div>
                        <Link to={"/"}>
                            <FontAwesomeIcon
                                className={"navbar__bloc__icon "}
                                icon={faHome}
                                alt={"home_icon"}
                            />
                        </Link>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            className={"navbar__bloc__icon"}
                            icon={faSearch}
                            alt={"home_icon"}
                        />
                    </div>
                    <div onClick={openMenu}>
                        <FontAwesomeIcon
                            className={"navbar__bloc__icon"}
                            icon={faBars}
                            alt={"home_icon"}
                        />
                    </div>
                </div>
            </div>
            <div>
                <DisplayMenu />
            </div>
            <Switch>
                <Route exact path={"/"} component={HomeBackGround} />
                <Route path={"/play"} component={MyMap} />
                <Route path={"/leaderboard"} component={Lead} />
                <Route path={"/gamelog"} component={Game} />
                <Route path={"/register"} component={Register_field} />
            </Switch>
        </Router>
    );
}

export default DisplayHeader;
