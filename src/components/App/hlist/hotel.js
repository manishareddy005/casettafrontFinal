import React from 'react';
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/bg1.jpeg";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import "./index.css";
class Hotel extends React.Component{

    constructor(props){
        super(props)
       this.onViewClick=this.onViewClick.bind(this)
    }
onViewClick(){
    console.log("Id of hotel is"+this.props.id)
    const ID = this.props.id
    this.props.onViewClick(ID)
   
}

render(){
        return(
            <div className="hstyle">
           
            <MDBCard style={{ width: "20em" ,height: "20em",background: "white",flex:1 }} >
            <MDBCardBody className="text-black">
                <MDBCardTitle><span>{this.props.name}</span><br></br></MDBCardTitle>
                <MDBCardImage className="img-fluid" src={himage} width="100%" height="50%" waves />
                <div className="row">
                <div className="column" style={{marginLeft:"1em",marginTop:"1em"}}>
                
                            <span>{this.props.location}</span><br></br>
                            <span>{this.props.price}</span><br></br>  
            
                </div>
                <div className="column" style={{marginLeft:"5em",marginTop:"0.5em"}}>
                <MDBBtn onClick={this.onViewClick}>view</MDBBtn>
                </div>
                </div>
                </MDBCardBody>
            </MDBCard>
        
            
            </div>
        )
    }   
}

export default Hotel;