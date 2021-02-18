import * as React from "react";

const leaf_icon = "../../assets/images/leaf.png";
const tree_icon = "";

const LeaderBoard = () => (
    <div className={"leaderBoard-main"}>
        <div className={"leaderBoard-box"}>
            <table>
                <thead>
                    <tr>
                        <th className={"leaderBoard-title"} colSpan={"4"}>
                            {"Leader Board"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={"leaderBoard-subtitle"}>{"#"}</td>
                        <td className={"leaderBoard-subtitle"}>{"User"}</td>
                        <td>
                            <img src={tree_icon} width={"25px"} />
                        </td>
                        <td>
                            <img src={leaf_icon} width={"25px"} />{" "}
                        </td>
                        <div className={"line"} />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"1"}</td>
                        <td>{"Maud"}</td>
                        <td>{"180"}</td>
                        <td>{"360"}</td>
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"2"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"3"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"4"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"5"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"6"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"7"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"8"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"9"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                    <tr className={"leaderBoard-rows"}>
                        <td>{"10"}</td>
                        <td />
                        <td />
                        <td />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default LeaderBoard;
