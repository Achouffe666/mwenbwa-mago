import React, {Component} from "react";
import {Marker, Popup} from "react-leaflet"; // MapContainer, TileLayer
import L from "leaflet";
import fleatIcon from "../../assets/images/leaf.png";
//import treedata from "../../data/treedata.json";
import axios from "axios";

const fleat_Icon = L.icon({
    iconUrl: fleatIcon,
    iconSize: [20, 25], // size of the icon
    iconAnchor: [20, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [0, 32], // point from which the popup should open relative to the iconAnchor
});

class MarkerGeo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            datas: [],
        };
    }

    componentDidMount() {
        axios.get("/testTree").then(
            result => {
                console.log(result.data);
                this.setState({
                    isLoaded: true,
                    datas: result.data,
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            },
        );
    }

    render() {
        const {error, isLoaded, datas} = this.state;
        if (error) {
            return <div>{"Erreur : {error.message}"}</div>;
        } else if (!isLoaded) {
            return <div>{"Chargement…"}</div>;
        }
        return datas.map(data => (
            <Marker
                position={data.location.coordinates}
                key={data._id}
                icon={fleat_Icon}>
                <Popup>
                    <p>{data.latinName}</p>
                    <p>{data.height}</p>
                    <button type={"submit"}>{"Buy now !"}</button>
                </Popup>
            </Marker>
        ));
    }
}

export default MarkerGeo;
