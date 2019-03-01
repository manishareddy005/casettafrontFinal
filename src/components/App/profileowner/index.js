import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
import "./index.css";
class ProfileOwner extends React.Component{
    constructor(props){
        super(props)
       this.onaddhotelsClick=this.onaddhotelsClick.bind(this)
    }

    onaddhotelsClick(){
        console.log("form to enter details")
    }

    render(){
        return(
            <div>
                <center>
               <MDBBtn style={{width:"20em", margin:"6em"}} href="/hotelform" 
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  name="Add Hotels" value="addhotels"
                >
                  Add Hotels
                </MDBBtn>
                </center>
            </div>
        )
    }
}
export default ProfileOwner;