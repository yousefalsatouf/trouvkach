import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import PersonList from "./menu.js";

const userIcon = new L.Icon({
    iconUrl: require("../assets/location-arrow.svg"),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
});
const banksIcon = new L.Icon({
    iconUrl: require("../assets/bank.svg"),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
});
const atmIcon = new L.Icon({
    iconUrl: require("../assets/atm.svg"),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
});

class Carte extends React.Component {
    state = {
        lat: 1,
        lng: 1,
        zoom: 11,
    };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(success =>
            this.setState({
                lat: success.coords.latitude,
                lng: success.coords.longitude,
            }),
        );
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
          <div id='container'>

            <div id="list">
          <PersonList/>

          </div>

          <div id="map">
            <Map className={"map"} center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </Map>

            </div>
            </div>
        );
    }
}

export default Carte;