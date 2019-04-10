import React from 'react';
import "../image/index.css";
import "../index.css";
import Search from "./search";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';

class PreHome extends React.Component{
    constructor(props){
        super(props);
        this.onOwnerLogged=this.onOwnerLogged.bind(this);
    }
    componentDidMount(){
        {navigator.geolocation.getCurrentPosition(function(location) {
            console.log("my current latitude :",location.coords.latitude)
            console.log("my current longitude :",location.coords.longitude);
           sessionStorage.setItem("lat",location.coords.latitude)
           sessionStorage.setItem("long",location.coords.longitude)
           console.log("my current latitude :",sessionStorage.getItem("lat"))
            console.log("my current longitude :",sessionStorage.getItem("long"));
        })}
   }
    onOwnerLogged() {
        
        if(sessionStorage.getItem('oname') != null) 
        {
          return (
            <div>
            <center><h3 style={{paddingTop:"10%",color:"grey",fontWeight:"600"}}>Welcome&nbsp;{sessionStorage.getItem('oname')}</h3></center>
            {/* <div>
                        <center>
                    <MDBBtn style={{width:"20em", margin:"6em"}} onClick={this.onDeleteClick} 
                        type="submit"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                        name="Delete Hotel" value="deletehotel"
                        >
                        My Profile
                        </MDBBtn>
                        </center>
                        </div> */}
          </div>
          );
        }
        else{
           return(
              <div >
                  <br></br><br></br><br>
            </br><br></br><br></br><br></br><br></br><br></br>
           </div>
           );
        }
        // return(
        // <NavBar history={this.props.history}/>)
      
     }
    render(){
        sessionStorage.setItem('type',"single");
        console.log("prehome type:"+sessionStorage.getItem('type'))
        return(
            <div className="homeb">
            <div className="img">
            {this.onOwnerLogged()}<br>
            </br><br></br>
            <center>
            <div >
            
            <br></br><br></br><br></br><br></br><br></br>
            <h3 className="text-white" style={{fontWeight:"400"}}><b><img src = {require("/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logo2.png")} width="250" height = "150" ></img><br></br>
                               Hyderabad</b></h3><br></br>
               <center> <Search history={this.props.history} /></center>
              </div>
              </center>
              </div>
           </div>
        )
    }
}
export default PreHome;