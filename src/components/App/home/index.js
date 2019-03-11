import React from 'react';
import "./index.css";
import SearchBar from "../searchbar";

class Home extends React.Component{
    render(){
        return(
            <div>            
        <div className="mydiv">
             <h1><strong><img src = {require("/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logo.png")} width="120" height = "70" ></img></strong></h1>
        </div>
        <div className="mydiv1">
            <SearchBar/>
         </div>
         </div>
        )
    }
}

export default Home;