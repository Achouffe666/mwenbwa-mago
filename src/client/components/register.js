import * as React from "react";
import Image from "../assets/images/user.svg";

const Register_field = () => (
    <div className={"register_field_main"}>
        <div className={"register_field_picture"}>
            <img src={Image} />
        </div>
        <form action={"/"} method={"POST"} className={"register_field_form"}>
            <label htmlFor={"firstname"}>{"Firstname:"}</label>
            <input
                type={"text"}
                id={"firstname"}
                name={"firstname"}
                placeholder={"Firstname"}
                required
            />

            <label htmlFor={"lastname"}>{"Lastname:"}</label>
            <input
                type={"text"}
                id={"lastname"}
                name={"lastname"}
                placeholder={"Lastname"}
                required
            />

            <label htmlFor={"password"}>{"Password:"}</label>
            <input
                type={"password"}
                id={"password"}
                placeholder={"Password"}
                required
            />

            <label htmlFor={"email"}>{"Email:"}</label>
            <input
                type={"email"}
                id={"email"}
                name={"email"}
                placeholder={"Email"}
                required
            />

            <label htmlFor={"birthday"}>{"Birthday:"}</label>
            <input
                type={"date"}
                id={"birthday"}
                name={"birthday"}
                placeholder={"Birthday"}
                required
            />
            <div className={"register_field_button"}>
                <input
                    type={"submit"}
                    className={"register_field_submit"}
                    value={"submit"}
                />
            </div>
        </form>
    </div>
);

export default Register_field;
