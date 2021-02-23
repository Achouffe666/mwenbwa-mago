import React from "react";
import {Link} from "react-router-dom";
import myPhoto from "../../assets/images/myProfil.jpg";

function DisplayMenu() {
    return (
        <div className={"menu"}>
            <div className={"menu__filter"}>
                <img className={"menu__myPhoto"} src={myPhoto} alt={"photo"} />
                <p className={"menu__user"}>{"Maud Leleux"}</p>
                <div className={"menu__profil__bloc"}>
                    <button type={"submit"} className={"menu__profil"}>
                        <Link
                            to={"/register"}
                            className={"picture__home__button"}>
                            <div>{"Register"}</div>
                        </Link>
                    </button>
                </div>

                <ul className={"menu__link__letters"}>
                    <li>
                        <Link
                            to={"/play"}
                            className={
                                "menu__link__letter menu__link__letter--b"
                            }>
                            {"Play"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/leaderboard"}
                            className={
                                "menu__link__letter menu__link__letter--c"
                            }>
                            {"Lead"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/gamelog"}
                            className={
                                "menu__link__letter menu__link__letter--d"
                            }>
                            {"Game"}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/users"}
                            className={
                                "menu__link__letter menu__link__letter--b"
                            }>
                            {"Utilisateurs"}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DisplayMenu;
