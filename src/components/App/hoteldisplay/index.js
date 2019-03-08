import React from "react";
import HotelList from "../hlist";
import "../index.css";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

class HotelDisplay extends React.Component{
    
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
    render(props){
        return(
            <div className="img">
                {console.log("home this.state.data:"+JSON.stringify(this.state.data))}
                 <HotelList 
                 hotel={this.state.data}
                 history={this.props.history}/>
              </div>
        )
    }
}
export default HotelDisplay;