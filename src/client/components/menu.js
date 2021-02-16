import * as React from "react";
import myPhoto from "../assets/images/myProfil.jpg";

const Menu = () => (
    <div className={"menu"}>
        <div className={"menu__filter"}>
            <div className={"menu__photo"}>
                <img className={"menu__myPhoto"} src={myPhoto} alt={"photo"} />
            </div>
            <p className={"menu__user"}>{"Maud Leleux"}</p>
            <div className={"menu__link__letters"}>
                <p className={"menu__link__letter menu__link__letter--a"}>
                    {"Play"}
                </p>
                <p className={"menu__link__letter"}>{"LeaderBoard"}</p>
                <p className={"menu__link__letter"}>{"GameLog"}</p>
                <p className={"menu__link__letter"}>{"ToDoList"}</p>
            </div>
        </div>
        <div className={"menu__profil__bloc"}>
            <input type={"text"} className={"menu__profil"} value={"Profil"} />
        </div>
        {/* <div className={"menu__link__bloc"}>
            <div className={"menu__link"} />
            <div className={"menu__link"} />
            <div className={"menu__link"} />
            <div className={"menu__link"} />
        </div> */}
    </div>
);

export default Menu;
