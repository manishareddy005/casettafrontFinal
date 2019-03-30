import React from "react";
//import Header from "../header";
import LeafletMap from "../map";
import  'leaflet/dist/leaflet.css';

class MapCall extends React.Component{

    state = {
       markers: [],
     };
   
     setMarker = ({latitude, longitude}) => {
       this.setState({
         markers: [...this.state.markers, {
           latitude,
           longitude 
         }]
       })
     }
     render(props){
        console.log(this.state) 
        return (
                <div className="App"style={{textAlign: "left"}}>
                    {/* <Header setMarker={this.setMarker}/> */}
                    <LeafletMap markers={this.state.markers} setMarker={this.setMarker}/>
                </div>
        )
     }
    }

    export default MapCall;
              