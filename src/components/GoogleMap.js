import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '50%',
    height: '75%'
}

export class MapContainer extends Component {

    state = {
        allHomes: [],
        showingInfoWindow: false,  
        activeMarker: [],        
        selectedPlace: []        
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/homes/')
            .then(response => response.json())
            .then(homeData => { this.setState( {allHomes: homeData} ) })
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
            <Map className="googleMap"
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
            {this.state.allHomes.map(home => (
                <Marker 
                    onClick={this.onMarkerClick}
                    street={home.street}
                    price={home.price}
                    position={{
                        lat: home.lat,
                        lng: home.logit
                    }}
                    icon={home.price < 600000  
                        ? {url: `https://www.clker.com/cliparts/R/g/O/v/U/h/google-maps-marker-for-residencelamontagne-md.png`, scaledSize: new window.google.maps.Size(20, 20)}
                        : {url: `https://www.clker.com/cliparts/W/0/g/a/W/E/map-pin-red.svg`, scaledSize: new window.google.maps.Size(35, 35)}
                        
                    }
                />
            ))}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h2>{this.state.selectedPlace.street}</h2>
                <h4>${this.state.selectedPlace.price}</h4>
            </div>
            </InfoWindow>
        </Map>
        )   
    }
}

export default GoogleApiWrapper({
    
})(MapContainer);
