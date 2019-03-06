import React from "react";
import './viewhotelcss.css';
import styled from "styled-components";
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/bg2.jpeg";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
const H = styled.div`
  padding: 4em;
  background: white;
  width: 50%;
`;

class ViewHotel extends React.Component{

    constructor(props){
        super(props)
         this.state = {
         hoteldata:[]
        }
    }
    componentDidMount(){
        const id=this.props.id;
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
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            hoteldata : contents})
             })
             .then(console.log("Fetched data:"+JSON.stringify(this.state.hoteldata)))
        .catch(() => console.log("Can’t access " + url + " response. "))
       
    }

   
    render(){
        return (
        <div >
            <center>
                <h1>Hello ViewHotel Page</h1> 
                {/* {console.log("viewhotel this.state.hoteldata:"+JSON.stringify(this.state.hoteldata.name))}
                    <H style={{background:"white", width:"50%",height:"25vh",padding:"10vh"}}>
                    {console.log("data in  viewhotel:"+this.props.id)}
                    <span>{this.state.hoteldata.name}</span><br></br>
                    <span>{this.state.hoteldata.location}</span><br></br>
                    <span>{this.state.hoteldata.price}</span><br></br>  
                    <span>{this.state.hoteldata.rating}</span><br></br>  
                    <span>{this.state.hoteldata.description}</span><br></br> 
                    <span>{this.state.hoteldata.url}</span><br></br>   
                    </H> */}
            <MDBCard style={{ minWidth: "10em",maxWidth:"50em" ,minHeight: "40em",maxHeight:"auto",background: "white",flex:1 }} >
            <MDBCardBody className="text-black">
                <MDBCardTitle><span>{this.state.hoteldata.name}</span><br></br></MDBCardTitle>
                <MDBCardImage className="img-fluid" src={himage} waves />
                <div style={{marginTop:"2em"}}>
                <h5>
                        <span className="details" >Location&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.location}</span><br></br>
                        <span className="details" >Price&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.price}</span><br></br>  
                        <span className="details" >Rating&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.rating}</span><br></br>  
                        <span className="details" >Description&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.description}</span><br></br> 
                       <span className="details" >URL&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.hoteldata.url}</span><br></br>   
                </h5>
                 </div>
                </MDBCardBody>
            </MDBCard>
        
            </center>
        </div>)
    }
}
export default ViewHotel;