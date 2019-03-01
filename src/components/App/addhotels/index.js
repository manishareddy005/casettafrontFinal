import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
import "./index.css";

class AddHotels extends React.Component {

    constructor(props){
        super(props)
       this.onaddhotelsClick=this.onaddhotelsClick.bind(this)
    }

    onaddhotelsClick(){
        console.log("form to enter details")
    }

    render(){
        return(
     <MDBContainer className="mydiv">
         <MDBRow>
         <MDBCol md="6">
         <MDBCard>
            <MDBCardBody className="mx-4">
            <div className="text-center mb-3">
                <MDBBtn  href="/hotelform" 
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  name="Add Hotels" value="addhotels"
                >
                  Add Hotels
                </MDBBtn>
            </div>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
         </MDBRow>
    </MDBContainer>
        )
    }
}


export default AddHotels;
