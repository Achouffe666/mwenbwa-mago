import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch, faBars} from "@fortawesome/free-solid-svg-icons";

function DisplayMenu() {
    const [open, setOpen] = useState(false);

    function openMenu() {
        if (open === false) {
            setOpen(true);
            document.querySelector(".menu").style.display = "block";
        } else if (open === true) {
            setOpen(false);
            document.querySelector(".menu").style.display = "none";
        }
    }

    return (
        <div className={"navbar"}>
            <div className={"navbar__bloc--title"}>
                <div>{"Green Grabber"}</div>
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
                <div onClick={openMenu}>
                    <FontAwesomeIcon
                        className={"navbar__bloc__icon"}
                        icon={faBars}
                        alt={"home_icon"}
                    />
                </div>
            </div>
            {/* <div className={"navbar__bloc--item"}>
                <div>{"Profil"}</div>
                <div>{"Play"}</div>
                <div>{"LeaderBoard"}</div>
                <div>{"Gamelog"}</div>
                <div>{"TodoList"}</div>
            </div> */}
        </div>
    );
}

export default DisplayMenu;
