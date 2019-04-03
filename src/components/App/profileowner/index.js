import React from "react";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import {MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from 'mdbreact';
import "./index.css";
import NavBarOwner from "../NavbarOwner";
import HotelList from "../hlist/index"
import PHotelList from "./phlist";
class ProfileOwner extends React.Component{
    constructor(props){
        super(props)
       this.onaddhotelsClick=this.onaddhotelsClick.bind(this);
       this.getHotelsByOwner=this.getHotelsByOwner.bind(this);
       this.state = {
        ohdata:[],
        userdata:{
            username:'',
            email:''
          }    
          //listDataFromChild: null
       }
    }
    async componentDidMount(){
        let res;
        var bearerToken = localStorage.getItem('accessToken');
        const url = "http://localhost:9000/users/me";
        var accesstoken = 'Bearer ' + bearerToken;

        console.log(accesstoken);

        fetch(url,{
          method:'GET',
          withCredentials:true,
          credentials:'include',
          headers:{
            'Authorization':accesstoken,
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': url
          }
        })
        
        .then((response)=>{
        res=response.json()
        .then(responseJson => {
                            this.setState ({
                                userdata: responseJson
                                })
             })})
       .then((responseJson)=>{console.log("usename Profileowner:" + this.state.userdata.username)
        this.getHotelsByOwner(this.state.userdata.username)
    })
          // this.props.callbackFromParent(this.state.userdata.username);
        //let oname=this.state.userdata.username;      
    }


    getHotelsByOwner(oname){
        console.log("username in Profileowner:"+oname)
       const url = "http://localhost:9000/hotels/username"; 
       let headers = new Headers();
   
       headers.append('Content-Type', 'application/json');
       headers.append('Accept', 'application/json');
   
       headers.append('Access-Control-Allow-Origin', url);
       headers.append('Access-Control-Allow-Credentials', 'true');
   
       headers.append('GET', 'POST');
       //let ownername=this.state.userdata.username;
       console.log("ownername:"+ JSON.stringify(oname))
       let bodyo="{\"username\":"+JSON.stringify(oname)+"}"
   
       fetch(url, {
           headers: headers,
           method: 'POST',
           body: bodyo
       })
       .then(res => res.json())
       .then(contents => {console.log("in fetch: "+ contents.stringify);
                           this.setState ({
                           ohdata : contents})
            })
        .then(console.log("Fetched data:"+this.state.ohdata))
     // .catch(() => console.log("Can’t access " + url + " response. "))       
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
                    {/* <HotelList 
                         hotel={this.state.ohdata}
                        history={this.props.history}/> */}
                       <center><b><h1 style={{ fontSize: '40px',fontWeight:"600" }}>My Hotels</h1></b></center>
                        <PHotelList 
                         hotel={this.state.ohdata}
                        history={this.props.history}/>
                </div>
                <FooterPage/>
            </div>
        )
    }
}
export default ProfileOwner;