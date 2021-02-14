import React, {Component} from "react";
//mport L from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import DisplayMenu from "./header";
import FooterYellow from "./footer";

class MyMap extends Component {
    render() {
        const position = [50.6446, 5.57341];
        return (
            <div>
                <DisplayMenu />
                <MapContainer center={position} zoom={13}>
                    <TileLayer
                        attribution={
                            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                        }
                        url={
                            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />
                    <Marker position={position}>
                        <Popup>
                            {"A pretty CSS3 popup. <br /> Easily customizable."}
                        </Popup>
                    </Marker>
                </MapContainer>
                <FooterYellow />
            </div>
        );
    }
}

export default MyMap;
///api/datasets/1.0/search/?q=
