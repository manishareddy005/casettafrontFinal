import React from "react";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
import "./index.css";
import NavBarOwner from "../NavbarOwner";
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
            <div className="homeb">
                <div className="img">
                    <NavBarOwner/><br></br>
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
                </div>
                <FooterPage/>
            </div>
        )
    }
}
export default ProfileOwner;