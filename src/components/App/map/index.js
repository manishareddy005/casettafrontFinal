import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import HotelForm from "../hotelform/index"


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];
class LeafletMap extends Component {

  handleClick = (e) => {
    this.props.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng 
    });
    //return( <Popup>latitude:{e.latlng.lat}<br />longitude:{e.latlng.lng }</Popup>)
    console.log("latitude",e.latlng.lat,"longitude",e.latlng.lng )
    localStorage.setItem("latitude",e.latlng.lat);
    localStorage.setItem("longitude",e.latlng.lng);
   
  };

  
  render() {
    return (
      <Map
        ref={this.mapRef}
        center={position} 
        zoom={13} 
        style={{ height: '1100px', width: '100%' }}
        onClick={this.handleClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          this.props.markers.map((m) => (
            <Marker position={[parseFloat(m.latitude), parseFloat(m.longitude)]}>
              <Popup>latitude:{m.latitude}<br />longitude:{m.longitude}</Popup>
            </Marker>
          ))
          }
      </Map> 
    );
  }
}

export default LeafletMap;