import * as React from "react";
import MyMap from "./map";
import DisplayMenu from "../layout/header";
import FooterYellow from "../layout/footer";

const MapViewer = () => (
    <div>
        <DisplayMenu />
        <MyMap />
        <FooterYellow />
    </div>
);

export default MapViewer;
