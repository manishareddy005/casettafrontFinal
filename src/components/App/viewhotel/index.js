import React from "react";
import './viewhotelcss.css';
import NavBar from "../navbar/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import styled from "styled-components";
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/bg2.jpeg";

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import {Carousel} from "react-bootstrap";
const H = styled.div`
  padding: 4em;
  background: white;
  width: 50%;`;

  delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];



class ViewHotel extends React.Component{

    constructor(props){
        super(props)
         this.state = {
            name:'',
            location: '',
            description:'',
            latitude:'',
            longitude:'',
            sprice:'',
            dprice:'',
            suprice:'',
            rating:'',
            url:'',
    
         amenities: [],
            output: [],
            output1: [],
         imgurls:[],
         markers:[],
        }
    }
    componentDidMount(props){
        let id=this.props.location.state.id;
        console.log("componentDidMount in viewhotel id:"+id);

        const url = "http://localhost:9000/hotels/"+id; 
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    
        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');
    
        headers.append('GET', 'POST');
        
    
        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
                        if(contents.imageUrls!=null)
                        {
                            this.setState ({
                                name:contents.name,
                                location:contents.location,
                                sprice:contents.sprice,
                                dprice:contents.dprice,
                                suprice:contents.suprice,
                                rating:contents.rating,
                                description:contents.description,
                                url:contents.url,
                                amenities:contents.amenities,
                                latitude:contents.latitude,
                                longitude:contents.longitude,
                                imgurls : contents.imageUrls})   
                                  
                        }
                        else{
                              this.setState ({
                                name:contents.name,
                                location:contents.location,
                                amenities:contents.amenities,
                                imgurls : [{himage}]})  
                        } 
                                 
                })
        //.catch(() => console.log("Can’t access " + url + " response. "))
       
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


        console.log(this.state.data);
        console.log(this.state.amenities);
        console.log("Images" + this.state.imageUrls)
        console.log("amenities keys" + this.state.amenities);

        if (this.state.amenities.wifi == true) {
            this.state.output1.push(<i class="fa fa-wifi fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Wifi  ");
        }

        if (this.state.amenities.playarea == true) {
            this.state.output1.push(<i class="fa fa-futbol fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Play Area ");
        }

        if (this.state.amenities.breakfast == true) {
            this.state.output1.push(<i class="fas fa-utensils fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Breakfast ");
        }

        if (this.state.amenities.handicapped == true) {
            this.state.output1.push(<i class="fa fa-wheelchair fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Handicapped Facilities ");
        }

        if (this.state.amenities.gym == true) {
            this.state.output1.push(<i class="fas fa-dumbbell fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Fitness Centre");
        }

        if (this.state.amenities.parking == true) {
            this.state.output1.push(<i class="fa fa-car fa-2x" aria-hidden="true"></i>)
            this.state.output.push("valet Parking  ");
        }

        if (this.state.amenities.pool == true) {
            this.state.output1.push(<i class="fas fa-swimmer fa-2x"></i>)
            this.state.output.push("Pool  ");
        }
        
        if (this.state.amenities.business== true) {
            this.state.output1.push(<i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Business Centre");
        }
        
        if (this.state.amenities.pets == true) {
            this.state.output1.push(<i class="fa fa-paw fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Pet-friendly ");
        }
       
        if (this.state.amenities.ocheckin == true) {
            this.state.output1.push(<i class="fa fa-laptop fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Online Checkin ");
        }
       
        if (this.state.amenities.bar == true) {
            this.state.output1.push(<i class="fa fa-beer fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Bar or Lounge ");
        }

        if (this.state.amenities.iron== true) {
            this.state.output1.push(<i class="fa fa-plug fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Iron");
        }

        if (this.state.amenities.refreshments== true) {
            this.state.output1.push(<i class="fa fa-filter fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Refreshments");
        }
       
        if (this.state.amenities.fridge== true) {
            this.state.output1.push(<i class="fa fa-archive fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Mini fridge/Bar");
        }

        if (this.state.amenities.connrooms== true) {
            this.state.output1.push(<i class="fa fa-sort fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Connectiong Rooms");
        }

        if (this.state.amenities.laundry== true) {
            this.state.output1.push(<i class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Laundry");
        }
       
        if (this.state.amenities.theatre== true) {
            this.state.output1.push(<i class="fa fa-tv fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Theatre");
        }
        
        if (this.state.amenities.library== true) {
            this.state.output1.push(<i class="fa fa-book fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Library");
        }

        if (this.state.amenities.medical== true) {
            this.state.output1.push(<i class="fa fa-ambulance fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Medical Aid");
        }

        if (this.state.amenities.airConditioning== true) {
            this.state.output1.push(<i class="fa fa-snowflake fa-2x" aria-hidden="true"></i>)
            this.state.output.push("Air Conditioning");
        }
       
        return (
            <div className="homeb">
                      <div className="img">
                           <NavBar/><br></br>
                           <div >
                                <center>
                                <MDBCard style={{ minWidth: "10em",maxWidth:"50em" ,minHeight: "40em",maxHeight:"auto",background: "white",flex:1 }} >
                                <MDBCardBody className="text-black">
                                    <MDBCardTitle><span>{this.state.name}</span><br></br></MDBCardTitle>
                                    {/* <MDBCardImage className="img-fluid" src={imgurl2} waves />   */}
                                    <Carousel>
                                    {this.state.imgurls.map(function(img, j){return <img className="imgurl" key={j} src={img}/>})}
                                    </Carousel>
                                    <div style={{marginTop:"2em"}}>
                                    <h5>
                                            <span className="details" >Location&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.location}</span><br></br> 
                                            <span className="details" >Price for Singlr room&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.sprice}</span><br></br>
                                            <span className="details" >Price for double room&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.dprice}</span><br></br>    
                                            <span className="details" >Price for suite&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.suprice}</span><br></br>  
                                            <span className="details" >Ranking&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.rating}</span><br></br>  
                                            <span className="details" >Description&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.description}</span><br></br> 
                                            <span className="details" >Latitude&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.latitude}</span><br></br> 
                                            <span className="details" >Longitude&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.longitude}</span><br></br> 
                                            <span className="details" >URL&nbsp;&nbsp;:&nbsp;&nbsp;<a href={this.state.url}>visit the site</a></span><br></br>  <hr></hr>
                                            
                     
                            <b><h1 style={{ fontSize: '50px' }}>Amenities</h1></b>
                            <br />
                            <center>
                                {this.state.output.map((home, index) => {
                                    const id = `${home.id}`
                                    // const path= `/detailsPage/`+id
                                    console.log("output array"+this.state.output)
                                    return (
                                        <li key={index} style={{ listStyle: 'none', float: 'left', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '10px', paddingTop: '20px', display: 'inline' }}>
                                            <div className='listitemsAmen' >
                                                {this.state.output1[index]}
                                                <br /> <br />
                                                {this.state.output[index]}
                                            </div>
                                        </li>
                                    )
                                })}
                            </center>
                             <br></br><br></br>
                                    </h5>
                                    </div>
                                    <hr />
                                    <Map
                                                ref={this.mapRef}
                                                center={position} 
                                                zoom={5} 
                                                style={{ height: '350px', width: '100%' }}
                                                >
                                                <TileLayer
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                                />
                                            
                                
                                                <Marker position={[this.state.latitude,this.state.longitude]}>
                                                <Popup minWidth={100} closeButton={true} minHeight={10}>
                                                    <div>
                                                    <b>{this.state.name}</b>
                                                    <p>latitude:{this.state.latitude}</p>
                                                    <p>longitude:{this.state.longitude}</p>
                                                    </div>
                                                </Popup>
                                                </Marker>
                                 </Map>
                                    </MDBCardBody>
                                </MDBCard>
                                
                            
                                </center>
                            </div>
                        </div>




                        






                 <FooterPage/>
            </div>
        )
    }
}
export default ViewHotel;