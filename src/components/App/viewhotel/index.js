import React from "react";
import './viewhotelcss.css';
import NavBar from "../navbar/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import styled from "styled-components";
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/bg2.jpeg";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
const H = styled.div`
  padding: 4em;
  background: white;
  width: 50%;`;


class ViewHotel extends React.Component{

    constructor(props){
        super(props)
         this.state = {
         hoteldata:[]
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
                              this.setState ({
                              hoteldata : contents})          
                })
        //.catch(() => console.log("Can’t access " + url + " response. "))
       
    }

   
    render(){
        // let imgurl1=this.state.hoteldata.imageUrls[0];
        // let imgurl2=this.state.hoteldata.imageUrls[1];
        // let imgurl3=this.state.hoteldata.imageUrls[2];
        return (
            <div className="homeb">
                      <div className="img">
                           <NavBar/><br></br>
                           <div >
                                <center>
                                    <h1>Hello ViewHotel Page</h1> 
                                <MDBCard style={{ minWidth: "10em",maxWidth:"50em" ,minHeight: "40em",maxHeight:"auto",background: "white",flex:1 }} >
                                <MDBCardBody className="text-black">
                                    <MDBCardTitle><span>{this.state.hoteldata.name}</span><br></br></MDBCardTitle>
                                    <MDBCardImage className="img-fluid" src={himage} waves />
                                    {/* <MDBCardImage className="img-fluid" src={imgurl1} waves />
                                    <MDBCardImage className="img-fluid" src={imgurl2} waves />
                                    <MDBCardImage className="img-fluid" src={imgurl3} waves /> */}
                                    <div style={{marginTop:"2em"}}>
                                    <h5>
                                            <span className="details" >Location&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.location}</span><br></br>
                                            <span className="details" >Price&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.price}</span><br></br>  
                                            <span className="details" >Ranking&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.rating}</span><br></br>  
                                            <span className="details" >Description&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.description}</span><br></br> 
                                            <span className="details" >Amenities&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.amenities}</span><br></br> 
                                            <span className="details" >URL&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.url}</span><br></br>   
                                        {/* <span className="details" >imgURL&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.imageUrls}</span><br></br> */}
                                    </h5>
                                    </div>
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