import React from "react";
import HotelList from "./hlist/index";
import ViewHotel from "./viewhotel/index";
import NavBar from "./navbar/index";
import "./image/index.css";
import "./index.css";
import SignUpPage from "./ownersignup";
import LoginPage from "./ownerlogin";
import FooterPage from "./footer";
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
import HotelForm from "./hotelform";
import SearchBar from "./searchbar";
import Home from "./home";
import NavBarOwner from "./NavbarOwner";
import ProfileOwner from "./profileowner";


class App extends React.Component{
   constructor(props){
      super(props)
       this.state = {
       data:[]
      }
   }
      componentDidMount(){

         const url = "http://localhost:9000/hotels"; 
         let headers = new Headers();
     
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
     
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
     
         headers.append('GET', 'POST');
         
     
         fetch(url, {
             headers: headers,
             method: 'GET'
         })
         .then(response => response.json())
         .then(contents => {console.log("in fetch: "+ contents);
                             this.setState ({
                             data : contents})
              })
              .then(console.log("Fetched data:"+this.state.data))
         .catch(() => console.log("Can’t access " + url + " response. "))
        
     }

   render(){
      return(
         <Router>
            <Switch>

            <Route exact path="/home1" render={(props) => {
                  return(
                     <div className="homeb">
                      <div className="img">
                       <Home/>
                      </div>
                        <FooterPage/>
                     </div>
                  )
               }} />
               
               <Route exact path="/home" render={(props) => {
                  return(
                     <div className="homeb">
                      <div className="img">
                      {console.log("home this.state.data:"+JSON.stringify(this.state.data))}
                           <NavBar/><br></br>
                           <HotelList 
                           hotel={this.state.data}
                           history={props.history}/>
                        </div>
                        <FooterPage/>
                     </div>
                  )
               }} />
            
               <Route exact path="/viewhotel/:id"  render={(props) => {
                  const hid = props.match.params.id
                  {
                     console.log("hid:"+hid)
                  }
                  return(
                     <div className="homeb">
                        <div className="img">
                           <NavBar/>
                           <ViewHotel
                              id={hid}
                           />
                         </div>
                         <FooterPage/>
                     </div>
                  )
               }}/>
               <Route exact path="/signup" render={(props) => {
                  return(
                     <div className="homeb">
                     <div className="img">
                        <NavBar/>
                        <SignUpPage history={props.history}/>
                     </div>
                     <FooterPage />
                     </div>
                  )
               }} />
               <Route exact path="/login" render={(props) => {
                  return(
                     <div className="homeb">
                     <div className="img">
                        <NavBar/>
                        <LoginPage history={props.history}/>
                     </div> 
                     <FooterPage />
                     </div>
                  )
               }} />
              
                  <Route exact path="/hotelform" render={(props) => {
                     return(
                        <div className="homeb">
                        <div className="img">
                           <NavBar/>
                           <HotelForm/>
                           </div>
                           <FooterPage />
                        </div>
                     )

               }}/>
               <Route exact path="/profileowner" render={(props) => {
                     return(
                        <div className="homeb">
                        <div className="img">
                           <NavBarOwner/>
                           <ProfileOwner/>
                           </div>
                           <FooterPage />
                        </div>
                     )

               }}/>
               <Redirect to="/home"/>
            </Switch> 
         </Router>
      );
   }
}



export default App;