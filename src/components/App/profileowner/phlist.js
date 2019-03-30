import React from "react";
import PHotel from "./photel";
import "./index.css";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

class PHotelList extends React.Component{
    
    constructor(props){
        super(props);
        this.onViewClick=this.onViewClick.bind(this);
        this.onEditClick=this.onEditClick.bind(this);

    }
    onViewClick(id){
        {console.log("phlist id"+id)}
        let path=`/viewhotel/${id}`;
        this.props.history.push({
            pathname: path,
            state: {
               id:id
            }
           });
    }
    onEditClick(id){
        {console.log("phlist id"+id)}
        let path=`/updatehotel`;
        this.props.history.push({
            pathname: path,
            state: {
               id:id
            }
           });
    }
    render(){
        return(
            <CardDeck>
            <div className="hliststyle">
                {this.props.hotel.map(h => <PHotel user={h.user} key={h.id}  id={h.id} name={h.name} location={h.location} sprice={h.sprice} imageUrls={h.imageUrls} history={this.props.history} onViewClick={this.onViewClick} onEditClick={this.onEditClick}/>)}
            </div>
            </CardDeck>
        )
    }
}
export default PHotelList;