import React, { Component } from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

const mapStyles = {
    width: '300px',
    height: '200px'
  };

export class MapContainer extends Component{
    render(){
        return(<Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
             lat: -1.2884,
             lng: 36.8233
            }}
          />);
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNHseFc5MhCembkXZKwjVQHsaFgHSJSA4'
  })(MapContainer)