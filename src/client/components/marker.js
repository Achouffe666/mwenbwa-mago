import React, {Component} from "react";
import {Marker} from "react-leaflet"; // MapContainer, TileLayer
import L from "leaflet";
import fleatIcon from "../assets/images/leaf.png";
import treedata from "../data/treedata.json";

const fleat_Icon = L.icon({
    iconUrl: fleatIcon,
    iconSize: [20, 25], // size of the icon
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

class MarkerGeo extends Component {
    render() {
        return treedata.map(item => (
            <Marker
                position={item.location.coordinates}
                key={item._id.$oid}
                icon={fleat_Icon}
            />
        ));
    }
}

export default MarkerGeo;
