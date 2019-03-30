import React from "react";
import ViewHotel from "./viewhotel/index";
// import "./image/index.css";
// import "./index.css";
import SignUpPage from "./ownersignup";
import LoginPage from "./ownerlogin";
import HotelForm from "./hotelform";
import PreHome from "./Prehome";
import ProfileOwner from "./profileowner";
import HomePage from "./HomePage";
import Header from "./header";
import LeafletMap from "./map/index";
import  'leaflet/dist/leaflet.css';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
import ImageUpload from "./hotelform/imgupload";
import UpdateHotel from "./hotelform/updatehotel";
// import Header from "./header";
// import LeafletMap from "./map";

class App extends React.Component{

   // state = {
   //    markers: [],
   //  };
  
   //  setMarker = ({latitude, longitude}) => {
   //    this.setState({
   //      markers: [...this.state.markers, {
   //        latitude,
   //        longitude 
   //      }]
   //    })
   //  }
   
   render(props){
      console.log(this.state)
      return(
         <Router>
            <Switch>

            <Route  path="/prehome" component={PreHome}/>
               
               <Route exact path="/home" component={HomePage} />
            
               <Route exact path="/viewhotel/:id"  component={ViewHotel}/>
               <Route exact path="/signup" component={SignUpPage} />
               <Route exact path="/login" component={LoginPage} />
              
               <Route exact path="/hotelform" component={HotelForm} />
               <Route exact path="/profileowner" component={ProfileOwner}/>
               {/* <Route exact path="/header" component={Header}/>
               <Route exact path="/map" component={LeafletMap}/> */}
               <Route exact path="/imageupload" component={ImageUpload}/>
               <Route exact path="/updatehotel" component={UpdateHotel}/>


               {/* /<Route exact path="/maps" component={Map}/> */}
               {/* <Route className="App"style={{textAlign: "left"}} exact path="/trialmap" render = {(props) => {
                 return <div>
                          <Header setMarker={this.setMarker}/>
                          <LeafletMap markers={this.state.markers} setMarker={this.setMarker}/>
                        </div>
               }}/> */}

               <Redirect to="/prehome"/>
            </Switch> 
         </Router>
      );                                
   }
}
export default App;