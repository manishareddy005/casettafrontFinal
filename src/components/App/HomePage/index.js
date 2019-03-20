import React from "react";
import NavBar from "../navbar/index";
import HotelDisplay from "../hoteldisplay/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
import '../global.js';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';
import HotelList from "../hlist";
class HomePage extends React.Component{
   constructor(props){
      super(props);
      this.onOwnerLogged=this.onOwnerLogged.bind(this);
      this.state={
         sdata:[]
      }
    }

    componentDidMount(){
      let params
       if((this.props.location.state.loc!=null)&&(this.props.location.state.price!=null))
       {
         params={
            "location":this.props.location.state.loc,
            "maxP":this.props.location.state.price
         }
      }
      else if((this.props.location.state.loc==null)&&(this.props.location.state.price!=null))
      {
         params={
            "maxP":this.props.location.state.price
         }
      }
      else if((this.props.location.state.loc!=null)&&(this.props.location.state.price==null))
      {
         params={
            "location":this.props.location.state.loc
         }
      }
      else{
        params={
        }
      }
       let url="";
       console.log("search in home:"+this.props.location.state.loc)
      let query=Object.keys(params).map(k=>encodeURIComponent(k)+'='+encodeURIComponent(params[k])).join('&');
      console.log("query in home:"+query)
      if(params==null){
          url = "http://localhost:9000/hotels"; 
      }
      else{
            url = "http://localhost:9000/hotels?"+query; 
          }
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
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
                              this.setState ({
                              sdata : contents})    
                              
                })
      } 
      onOwnerLogged() {
         if(sessionStorage.getItem('oname') != null) 
         {
           return (
             <div>
            <NavBar history={this.props.history} oname={sessionStorage.getItem('oname')}/><br></br>
             <center><h2>Welcome back&nbsp;{sessionStorage.getItem('oname')}...</h2></center>
           </div>
           );
         }
         else{
            return(
               <div>
            <NavBar history={this.props.history}/><br></br>
            </div>
            );
         }
       } 
   render(){
      if(global.search=="true")
      {
         console.log("search:"+global.search)
      return(<div>Search=true</div>)
      }
      else{
      return(
                     <div className="homeb">
                      <div className="img">
                           {/* <NavBar history={this.props.history} oname={this.props.location.state.name}/><br></br> */}
                           {this.onOwnerLogged()}
                           <HotelList 
                              hotel={this.state.sdata}
                              history={this.props.history}/>
                        </div>
                        <FooterPage/>
                     </div>
                  )
   }}
}



export default HomePage;