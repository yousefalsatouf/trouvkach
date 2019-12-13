import React from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import L from "leaflet";
import PersonList from "./menu.js";
import axios from 'axios';

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
        lat: 50,
        lng: 5,
        zoom: 14,
        terminals: [],
    };
    
    render() {

        window.navigator.geolocation.getCurrentPosition(success =>
            this.setState({
                lat: success.coords.latitude,
                lng: success.coords.longitude,
            }),
        );

        axios.get(`/${this.props.lat}/${this.props.long}`)
        .then(res => {
          const terminals = res.data;
          this.setState({terminals});
        })

        const position = [this.state.lat, this.state.lng];
        console.log(this.state.lat);
        
        return (
          <div id='container'>

            <div id="list">
          <PersonList lat={this.state.lat} long={this.state.lng}/>

          </div>

          <div id="map">
            <Map className={"map"} center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                <Marker position={position}>
                    <Popup>
                        Your position
                    </Popup>
                </Marker>
                { this.state.terminals.map(terminal => <Marker position={[terminal.latitude, terminal.longitude]}>
                    
                    <Popup>
                    <a href={terminal.bankDetails[0].url} target="_blank">{terminal.bankDetails[0].name}</a><br/>{terminal.address}
                    </Popup>

                </Marker>)}
                    
            </Map>

            </div>
            </div>
        );
    }
}

export default Carte;