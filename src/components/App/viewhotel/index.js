import React from "react";
import './viewhotelcss.css';
import styled from "styled-components";
const H = styled.div`
  padding: 4em;
  background: white;
  width: 50%;
`;
class ViewHotel extends React.Component{
    render(){
        return (
        <div >
            <center>
                <h1>Hello ViewHotel Page</h1> 
                {/* <button className="danger">Click Me</button><br></br> */}
                    <H style={{background:"white", width:"50%",height:"25vh",padding:"10vh"}}>
                    <span>{this.props.name}</span><br></br>
                    <span>{this.props.location}</span><br></br>
                    <span>{this.props.price}</span><br></br>  
                    </H>
            </center>
        </div>)
    }
}
export default ViewHotel;