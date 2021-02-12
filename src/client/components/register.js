import * as React from "react";

const Register = () => (
    <div>
        <label htmlFor={"firstname"}>{"Firstname: "}</label>
        <input type={"text"} id={"firstname"} name={"firstname"} required />
    </div>
);

export default Register;
