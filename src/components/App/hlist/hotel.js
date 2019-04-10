import React from 'react';
import himage from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/6.png";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import "./index.css";

class Hotel extends React.Component{

    constructor(props){
        super(props)
       this.onViewClick=this.onViewClick.bind(this)
       this.state={
           id:""
       }
    }
    onButtonChange(event) {
        this.setState({id:event.currentTarget.value}, ()=>{
          console.log(this.state.id)
        }
        
        );
        console.log(this.state.id)
        let path=`Details`;
        
       this.props.history.push({
          pathname: path,
          state: {
             id:event.currentTarget.value
          }
         });
         
      }
onViewClick(event){
    
    console.log("Id of hotel is"+this.props.id)
    const ID = this.props.id
    this.props.onViewClick(ID)
    
}

render(){
    let imgurl;
    if(this.props.imageUrls==null)
    { imgurl=himage}
    else
    imgurl=this.props.imageUrls[0];
        return(
        //  <div className="split left">  
            <div  className="hstyle">
            <MDBCard style={{ width: "20em" ,height: "21.5em",background: "white",flex:1 }} >
            <MDBCardBody className="text-black">
                <MDBCardTitle><span>{this.props.name}</span><br></br></MDBCardTitle>
                <MDBCardImage className="imgcard" src={imgurl} width="100%" height="50%" waves />
                <div className="row">
                <div className="column" style={{marginLeft:"1em",marginTop:"1em"}}>
                
                            <span>{this.props.location}</span><br></br>
                            <span>Rs.{this.props.price}</span><br></br> 
           
                           {/* <span>{this.props.imageUrls}</span><br></br>     */}
                </div>
                <div className="column" style={{marginLeft:"5em",marginTop:"-1.65em"}}>
                <MDBBtn onClick={this.onViewClick} style={{width:"8em"}} gradient="blue" className="btn-block z-depth-1a">view</MDBBtn>
                </div>
                </div>
                </MDBCardBody>
            </MDBCard>
             </div>
             //</div>
        )
    }   
}

export default Hotel;