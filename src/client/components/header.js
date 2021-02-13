import * as React from "react";
//import HomeIcon from "../assets/images/home.png";
//import SearchIcon from "../assets/images/loupe.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch, faBars} from "@fortawesome/free-solid-svg-icons";

const HeaderYellow = () => (
    <header className={"navbar"}>
        <div className={"navbar__bloc--title"}>
            <div>{"Title"}</div>
        </div>
        <div className={"navbar__bloc--home"}>
            <div>
                <FontAwesomeIcon
                    className={"navbar__bloc__icon"}
                    icon={faHome}
                    alt={"home_icon"}
                />
            </div>
            <div>
                <FontAwesomeIcon
                    className={"navbar__bloc__icon"}
                    icon={faSearch}
                    alt={"home_icon"}
                />
            </div>
            <div>
                <FontAwesomeIcon
                    className={"navbar__bloc__icon"}
                    icon={faBars}
                    alt={"home_icon"}
                />
            </div>
        </div>
        <div className={"navbar__bloc--item"}>
            <div>{"Profil"}</div>
            <div>{"Play"}</div>
            <div>{"LeaderBoard"}</div>
            <div>{"Gamelog"}</div>
            <div>{"TodoList"}</div>
        </div>
    </header>
);

export default HeaderYellow;
