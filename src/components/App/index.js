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
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
// import Header from "./header";
// import LeafletMap from "./map";

class App extends React.Component{
   
   render(props){
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


               <Redirect to="/prehome"/>
            </Switch> 
         </Router>
      );
   }
}
export default App;