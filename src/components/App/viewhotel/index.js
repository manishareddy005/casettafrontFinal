import React from "react";
import './viewhotelcss.css';
import styled from "styled-components";
const H = styled.div`
  padding: 4em;
  background: white;
  width: 50%;
`;
class ViewHotel extends React.Component{

    constructor(props){
        super(props)
         this.state = {
         hoteldata:[]
        }
    }
    componentDidMount(){
        const id=this.props.id;
        console.log("componentDidMount in viewhotel id:"+id);

        const url = "http://localhost:9000/hotels/"+id; 
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
                            hoteldata : contents})
             })
             .then(console.log("Fetched data:"+JSON.stringify(this.state.hoteldata)))
        .catch(() => console.log("Can’t access " + url + " response. "))
       
    }
    render(){
        return (
        <div >
            <center>
                <h1>Hello ViewHotel Page</h1> 
                {console.log("viewhotel this.state.hoteldata:"+JSON.stringify(this.state.hoteldata.name))}
                {/* <button className="danger">Click Me</button><br></br> */}
                    <H style={{background:"white", width:"50%",height:"25vh",padding:"10vh"}}>
                    {console.log("data in  viewhotel:"+this.props.id)}
                    <span>{this.state.hoteldata.name}</span><br></br>
                    <span>{this.state.hoteldata.location}</span><br></br>
                    <span>{this.state.hoteldata.price}</span><br></br>  
                    <span>{this.state.hoteldata.rating}</span><br></br>  
                    <span>{this.state.hoteldata.description}</span><br></br> 
                    <span>{this.state.hoteldata.url}</span><br></br>   
                    </H>
            </center>
        </div>)
    }
}
export default ViewHotel;