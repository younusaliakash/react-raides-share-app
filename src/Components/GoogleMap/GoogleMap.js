import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import './GoogleMap'

const style = {
    maxWidth: "650px",
    height: "380px",
    overflowX: "hidden",
    overflowY: "hidden",
    borderRadius : "10px"
   };
   const containerStyle = {
    maxWidth: "650px",
    height: "380px"
   };

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 23.777176,
      lng: 90.399452,
    },
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  

  render() {
    return (
      <div className="map main col-12">
        <Map
          google={this.props.google}
          style={style} containerStyle={containerStyle}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDw_aLiPiloG4gAZe5Plc7XYmBVTNYxiDc",
})(GoogleMap);
