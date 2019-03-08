import React from "react";
import NavBar from "../navbar/index";
import HotelDisplay from "../hoteldisplay/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
class HomePage extends React.Component{
   constructor(props){
      super(props);
    }
   render(){
      return(
                     <div className="homeb">
                      <div className="img">
                           <NavBar/><br></br>
                           <HotelDisplay history={this.props.history}/>
                        </div>
                        <FooterPage/>
                     </div>
                  )
   }
}



export default HomePage;