import * as React from "react";

const Register = () => (
    <div className={"main"}>
        <form className={"register"}>
            <label htmlFor={"firstname"}>{"firstname:"}</label>
            <input type={"text"} id={"firstname"} name={"firstname"} required />

            <label htmlFor={"lastname"}>{"lastname:"}</label>
            <input type={"text"} id={"lastname"} name={"lastname"} required />

            <label htmlFor={"password"}>{"password:"}</label>
            <input
                type={"password"}
                id={"password"}
                name={"password"}
                required
            />

            <label htmlFor={"email"}>{"email:"}</label>
            <input type={"email"} id={"email"} name={"email"} required />

            <label htmlFor={"birthday"}>{"Birthday:"}</label>
            <input type={"date"} id={"birthday"} name={"birthday"} required />
        </form>
    </div>
);

export default Register;
