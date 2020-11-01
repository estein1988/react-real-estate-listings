import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '75%',
    height: '75%'
}

export class MapContainer extends Component {

    state = {
        homes: [],
        showingInfoWindow: false,  
        activeMarker: {},        
        selectedPlace: {}          
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/homes/')
            .then(response => response.json())
            .then(homeData => { this.setState( {homes: homeData} ) })
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={10}
            style={mapStyles}
            initialCenter={
                {
                    lat: 39.79,
                    lng: -104.9
                }
            }
            >
            <Marker
            onClick={this.onMarkerClick}
            // name={'Kenyatta International Convention Centre'}
            position={{
                lat: -1.2884,
                lng: 36.8233
            }}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
        </Map>
        )   
    }
}

export default GoogleApiWrapper({
apiKey: 'AIzaSyD1hcrTaxPRCvV3C98Ei24vfyuuOc63R0c'
})(MapContainer);
