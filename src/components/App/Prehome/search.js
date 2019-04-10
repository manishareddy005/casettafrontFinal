import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import "./search.css";
class Search extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClick =this.onButtonClick.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.state = {
          data : [{ }],
          search:''
        }
      }
      onButtonClick() {     
          let loc=this.state.search
          if(loc)
          {console.log("location searched:"+loc);}
          else
          {
            loc=null;
            console.log("location searched:"+loc);
          }
         let path=`home`;
         sessionStorage.setItem('location',loc)
         this.props.history.push({
            pathname: path,
            state: {
             loc:loc
            }
           }); 
           window.location.reload() 
           
      }

      handleChange(e) {
        this.setState({search: e.target.value});
     }

      
    render() {
                   
        return(
            <div class="container"> 
                    <Row >
                      <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search the hotel by location or name"  style={{height:'100%'}} onChange={this.handleChange}/>
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button" onClick={this.onButtonClick}>
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    </Row>
                    
            </div>
           
        )
    }

}

export default withRouter(Search);