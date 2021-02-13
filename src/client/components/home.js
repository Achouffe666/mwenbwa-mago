import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../assets/images/myProfil.jpg";

const Picture = () => (
    <div className={"picture__home"}>
        <form className={"picture__home__bloc"}>
            <input
                type={"text"}
                className={"picture__home__input"}
                placeholder={"Username"}
            />
            <div className={"picture__home__password"}>
                <input
                    type={"text"}
                    className={"picture__home__input__password"}
                    placeholder={"PassWord"}
                />
                <FontAwesomeIcon
                    className={"icon__password"}
                    icon={faEye}
                    alt={"home_icon"}
                />
            </div>
            <input
                type={"submit"}
                className={"picture__home__button"}
                value={"Play Game"}
            />
            <div className={"picture__home__register"}>{"Register"}</div>
        </form>
        <div className={"menu"}>
            <div className={"menu__filter"}>
                <img className={"menu__myPhoto"} src={myPhoto} alt={"photo"} />
                <p className={"menu__user"}>{"Maud Leleux"}</p>
                <input
                    type={"text"}
                    className={"menu__profil"}
                    value={"Profil"}
                />
            </div>
        </div>
    </div>
);

export default Picture;
