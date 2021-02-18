import React, {useRef} from "react";
import {Marker, MapContainer, TileLayer, FeatureGroup} from "react-leaflet";
//import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import MarkerGeo from "./marker";
import Menu from "../layout/menu";

const MyMap = () => {
    const position = [50.6446, 5.57341];
    const groupRef = useRef();
    const clusterRef = useRef();

    // const createPopups = (feature = {}, layer) => {
    //     const { properties = {} } = feature
    //     const { address, price, bedrooms, bathrooms } = properties
    //     const popup = L.popup()
    //     const html = `
    //       <div class="popup-container">
    //       </div>`
    //       popup.setContent(html)
    //       layer.bindPopup(popup)
    //     }
    const mapStyle = {
        height: "71vh",
    };

    return (
        <div>
            <div id={"contentMap"}>
                <MapContainer
                    style={mapStyle}
                    center={position}
                    zoom={17}
                    minZoom={12}
                    maxZoom={18}>
                    <TileLayer
                        attribution={
                            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                        }
                        url={
                            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />
                    <FeatureGroup ref={groupRef} name={"Homes"}>
                        <Marker position={position} />
                        <MarkerClusterGroup ref={clusterRef}>
                            <MarkerGeo />
                        </MarkerClusterGroup>
                    </FeatureGroup>
                </MapContainer>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default MyMap;
///api/datasets/1.0/search/?q=
