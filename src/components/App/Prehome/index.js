import React from 'react';
import "../image/index.css";
import "../index.css";
import Search from "./search";

class PreHome extends React.Component{
    constructor(props){
        super(props);
        this.onOwnerLogged=this.onOwnerLogged.bind(this);
    }
    onOwnerLogged() {
        if(sessionStorage.getItem('oname') != null) 
        {
          return (
            <div>
            <center><h3>Welcome&nbsp;{sessionStorage.getItem('oname')}</h3></center>
          </div>
          );
        }
        else{
           return(
              <div >
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
            {/* {this.onOwnerLogged()} */}
            <div className="mysearch">
           
            <center><h5 className="text-white"><b><img src = {require("/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logo2.png")} width="250" height = "150" ></img><br></br>
                               Hyderabad</b></h5></center><br></br>
               <center> <Search history={this.props.history} /></center>
              </div>
              </div>
           </div>
        )
    }
}
export default PreHome;