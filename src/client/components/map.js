import React, {Component} from "react";
import L from "leaflet";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import DisplayMenu from "./header";
import FooterYellow from "./footer";
//import geojson from "../data/geojson.json";
import mapblue from "../assets/images/pin.png";
//import leafgreen from "../assets/images/leaf.png";
class MyMap extends Component {
    render() {
        const position = [50.6446, 5.57341];
        // const greenIcon = L.icon({
        //     iconUrl: leafgreen,
        //     iconSize:     [38, 50], // size of the icon
        //     shadowSize:   [50, 64], // size of the shadow
        //     iconAnchor:   [5.57350, 50.6443], // point of the icon which will correspond to marker's location
        //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        // });
        const mapIcon = L.icon({
            iconUrl: mapblue,
            iconSize: [38, 40], // size of the icon
            shadowSize: [50, 64], // size of the shadow
            iconAnchor: [5.57341, 50.6446], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
        });
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
                    <Marker position={position} icon={mapIcon}>
                        <Popup>{"Hey Grabber ! You're here"}</Popup>
                    </Marker>
                </MapContainer>
                <FooterYellow />
            </div>
        );
    }
}

export default MyMap;
///api/datasets/1.0/search/?q=
