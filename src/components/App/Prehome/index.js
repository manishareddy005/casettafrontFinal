import React from 'react';
import "../image/index.css";
import "../index.css";
import Search from "./search";

class PreHome extends React.Component{
    render(){
        return(
            <div className="homeb">
            <div className="img">
            <div className="mysearch">
               <center> <Search history={this.props.history} /></center>
              </div>
              </div>
           </div>
        )
    }
}
export default PreHome;