import React from "react";
import NavBar from "../navbar/index";
import HotelDisplay from "../hoteldisplay/index";
import FooterPage from "../footer";
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/6.png";
import "../image/index.css";
import "../index.css";
import '../global.js';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import { Carousel } from "react-bootstrap";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
import HotelList from "../hlist";
import MapCall from "./mapcall";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];

class HomePage extends React.Component{
   constructor(props){
      super(props);
      this.onOwnerLogged=this.onOwnerLogged.bind(this);
      this.state={
         sdata:[],
         rt:{
            type:''
         },
         markers: [],
         imgurls:[]
      }
    }

    componentDidMount(){
       console.log("type in homepage:"+sessionStorage.getItem("type"))
       let storet = this.state;
          storet.rt.type = sessionStorage.getItem("type"); 
          this.setState(storet);
      let params
       if((this.props.location.state.loc!=null)&&(this.props.location.state.price!=null))
       {
         params={
            "location":this.props.location.state.loc,
            "maxP":this.props.location.state.price
         }
      }
      else if((this.props.location.state.loc==null)&&(this.props.location.state.price!=null))
      {
         params={
            "maxP":this.props.location.state.price
         }
      }
      else if((this.props.location.state.loc!=null)&&(this.props.location.state.price==null))
      {
         params={
            "location":this.props.location.state.loc
         }
      }
      else{
        params={
        }
      }
       let url="";
       console.log("search in home:"+this.props.location.state.loc)
      let query=Object.keys(params).map(k=>encodeURIComponent(k)+'='+encodeURIComponent(params[k])).join('&');
      console.log("query in home:"+query)
      if(params==null){
          url = "http://localhost:9000/hotels"; 
      }
      else{
            url = "http://localhost:9000/hotels?"+query; 
          }
          let headers = new Headers();
      
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
      
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
      
          headers.append('GET', 'POST');
          
      
          fetch(url, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify(this.state.rt)
          })
          .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
          if (contents.imageUrls != null) {
                              this.setState ({
                              sdata : contents,
                              imgurls: contents.imageUrls})  
          }
          else{
            this.setState({
               sdata : contents,
               imgurls: [{ himage }]
           })
          }  
                              
                })
      } 
      onOwnerLogged() {
         if(sessionStorage.getItem('oname') != null) 
         {
           return (
             <div>
            <NavBar history={this.props.history} oname={sessionStorage.getItem('oname')}/><br></br>
             <center><h3>Welcome&nbsp;{sessionStorage.getItem('oname')}</h3></center>
           </div>
           );
         }
         else{
            return(
               <div >
            <NavBar history={this.props.history}/><br></br>
            </div>
            );
         }
       
      }
      
      
      setMarker = ({latitude, longitude}) => {
         this.setState({
           markers: [...this.state.markers, {
             latitude,
             longitude 
           }]
         })
       }


   render(){
      return(
            <div className="homeb" >
            <div className="img">
            {this.onOwnerLogged()}
            <div className="row" >
                 <div style={{width:"60%"}}>
                  <HotelList 
                     hotel={this.state.sdata}
                     history={this.props.history}/>
                     </div>
                     
                           <Map
                           ref={this.mapRef}
                           center={position} 
                           zoom={13} 
                           style={{ height: '100vh', width: '40%',marginLeft:"-5vh",marginTop:"5vh" }}
                           onClick={this.handleClick}
                           >
                           <TileLayer
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                           />
                     
                                 {this.state.sdata.map((m,index) => (
                                    
                                 <div key={index}>
                                 <Marker position={[parseFloat(m.latitude),parseFloat(m.longitude)]}>
                                 <Popup minWidth={"200"} closeButton={true} minHeight={10}>
                                 
                                    <div>
                                    <b>{m.name}</b>
                                    <Carousel>
                                        {m.imageUrls.map(function (img, j) { return <img key={j} src={img} width="80%" /> })}
                                    </Carousel>
                                    {m.location}
                                    
                                    </div>
                                 </Popup>
                                 </Marker>
                                 {
                                    console.log(m.latitude)
                                 }
                              </div>
                                    ))}

                                 </Map>
                                
                  
               </div>
               </div>
               <FooterPage/>
            </div>
         )
   }
}



export default HomePage;