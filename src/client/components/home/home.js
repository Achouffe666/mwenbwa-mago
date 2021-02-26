import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";

const Picture = () => (
    <div className={"picture__home"}>
        <form action={"/"} method={"POST"} className={"picture__home__bloc"}>
            <input
                type={"text"}
                name={"username"}
                className={"picture__home__input"}
                placeholder={"Username"}
            />
            <div className={"picture__home__password"}>
                <input
                    type={"text"}
                    name={"password"}
                    className={"picture__home__input__password"}
                    placeholder={"PassWord"}
                />
                <FontAwesomeIcon
                    className={"icon__password"}
                    icon={faEye}
                    alt={"home_icon"}
                />
            </div>
            <Link to={"/play"} className={"picture__home__button__link"}>
                <input
                    className={"picture__home__button"}
                    type={"submit"}
                    value={"Play Game"}
                />
            </Link>
            <Link to={"/register"} className={"picture__home__register"}>
                <div>{"Register"}</div>
            </Link>
        </form>
    </div>
);

export default Picture;
