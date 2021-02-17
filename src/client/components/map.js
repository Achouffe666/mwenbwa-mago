import React, {Component} from "react";
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Marker,
    FeatureGroup,
} from "react-leaflet";
//import L from "leaflet";
import geojson from "../data/geojson.json";
import MarkerClusterGroup from "react-leaflet-markercluster";

class MyMap extends Component {
    render() {
        const position = [50.6446, 5.57341];
        //const groupRef = useRef();
        //const clusterRef = useRef();
        // const createClusters = cluster => {
        //     const childCount = cluster.getChildCount();
        //     let size = "";
        //     if (childCount < 10) {
        //         size = "small";
        //     } else if (childCount < 25) {
        //         size = "medium";
        //     } else {
        //         size = "large";
        //     }
        //     return L.divIcon({
        //         html: `<div><span><b>${childCount}</b></span></div>`,
        //         className: `custom-marker-cluster custom-marker-cluster-${size}`,
        //         iconSize: new L.point(40, 40),
        //     });
        // };
        return (
            <div>
                <MapContainer
                    style={{height: "100vh"}}
                    center={position}
                    zoom={13}>
                    <TileLayer
                        attribution={
                            "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                        }
                        url={
                            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        }
                    />
                    <FeatureGroup name={"Homes"}>
                        <MarkerClusterGroup>
                            <Marker position={[50.6441, 5.57338]} />
                            <GeoJSON data={geojson} />
                        </MarkerClusterGroup>
                    </FeatureGroup>
                </MapContainer>
            </div>
        );
    }
}

export default MyMap;
///api/datasets/1.0/search/?q=
