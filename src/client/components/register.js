import * as React from "react";

const Register = () => (
    <div className={"main"}>
        <div className={"picture"}>
            <image src={"/images/"}>{"I'm the Picture"}</image>
        </div>
        <form className={"register"}>
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
                name={"password"}
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
            <button type={"submit"}>{"Submit"}</button>
        </form>
    </div>
);

export default Register;
