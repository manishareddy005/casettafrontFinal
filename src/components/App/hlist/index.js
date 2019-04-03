import React from "react";
import Hotel from "./hotel";
import "./index.css";
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';

class HotelList extends React.Component{
    
    constructor(props){
        super(props);
        this.onViewClick=this.onViewClick.bind(this);
        this.forHotelType=this.forHotelType.bind(this);

    }
    onViewClick(id){
        {console.log("hlist id"+id)}
        let path=`/viewhotel/${id}`;
        this.props.history.push({
            pathname: path,
            state: {
               id:id
            }
           });
    }
    forHotelType(){
        if(sessionStorage.getItem('type')=="single"){
            return(
                this.props.hotel.map(h => <Hotel user={h.user} key={h.id}  id={h.id} name={h.name} location={h.location} price={h.sprice} imageUrls={h.imageUrls} history={this.props.history} onViewClick={this.onViewClick}/>)
                  )
        }
        if(sessionStorage.getItem('type')=="double"){
            return(
                this.props.hotel.map(h => <Hotel user={h.user} key={h.id}  id={h.id} name={h.name} location={h.location} price={h.dprice} imageUrls={h.imageUrls} history={this.props.history} onViewClick={this.onViewClick}/>)
                  )
        }
        if(sessionStorage.getItem('type')=="suite"){
            return(
                this.props.hotel.map(h => <Hotel user={h.user} key={h.id}  id={h.id} name={h.name} location={h.location} price={h.suprice} imageUrls={h.imageUrls} history={this.props.history} onViewClick={this.onViewClick}/>)
                  )
        }
        // else{
        //   return(
        // this.props.hotel.map(h => <Hotel user={h.user} key={h.id}  id={h.id} name={h.name} location={h.location} price={h.price} imageUrls={h.imageUrls} history={this.props.history} onViewClick={this.onViewClick}/>)
        //   )
        // }
        
    }
    render(){
        
        return(
            <CardDeck>
            <div className="hliststyle">
               {this.forHotelType()}
            </div>
            </CardDeck>
        )
    }
}
export default HotelList;