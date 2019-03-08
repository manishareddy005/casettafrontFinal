import React from "react";
import ViewHotel from "./viewhotel/index";
// import "./image/index.css";
// import "./index.css";
import SignUpPage from "./ownersignup";
import LoginPage from "./ownerlogin";
import HotelForm from "./hotelform";
import Home from "./home";
import ProfileOwner from "./profileowner";
import HomePage from "./HomePage";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
class App extends React.Component{
   
   render(props){
      return(
         <Router>
            <Switch>

            <Route exact path="/home1" component={Home}/>
               
               <Route exact path="/home" component={HomePage} />
            
               <Route exact path="/viewhotel/:id"  component={ViewHotel}/>
               <Route exact path="/signup" component={SignUpPage} />
               <Route exact path="/login" component={LoginPage} />
              
                  <Route exact path="/hotelform" component={HotelForm} />
               <Route exact path="/profileowner" component={ProfileOwner}/>
               <Redirect to="/home"/>
            </Switch> 
         </Router>
      );
   }
}
export default App;