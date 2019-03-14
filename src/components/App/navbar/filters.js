import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import "./filters.css";
class Filters extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClick =this.onButtonClick.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.state = {
          form: {
            location: '',
            price:'',
          },
          fields: {},
        }
      }
      onButtonClick(e) {  
        e.preventDefault();
        let fields = {};
          fields["location"] = "";
          fields["price"] = ""; 
          this.setState({fields:fields});

          let store = this.state;
          store.form.price = this.state.fields["price"];
          store.form.location = this.state.fields["location"];   
          this.setState(store);
          console.log("filter price"+this.state.form.price);
          console.log("filter location"+this.state.form.location);
          let loc=this.state.form.location;
          let price=this.state.form.price;
          if(loc)
          {console.log("location searched:"+loc);}
          else
          {
            loc=null;
            console.log("location searched:"+loc);
          }
          if(price)
          {console.log("price searched:"+price);}
          else
          {
            price=null;
            console.log("price searched:"+price);
          }
         let path=`home`;
         this.props.history.push({
            pathname: path,
            state: {
             loc:loc,
             price:price
            }
           });  
      }

      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        // console.log("e.target.name:"+e.target.name)
        // console.log("e.target.value:"+fields[e.target.name])
        this.setState({
          fields
        });
     }

      
    render() {                 
        return(
            <div class="container"> 
                    <Row >
                      <div class="input-group">
                      <input type="text" name="location" class="form-control" placeholder="search hotels by location or name" value={this.state.fields["location"]} style={{height:'100%',width:'50%'}} onChange={this.handleChange}/>
                     &nbsp;<input type="number" name="price" class="form-control" placeholder="price "  value={this.state.fields["price"]} style={{height:'100%'}} onChange={this.handleChange}/>
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

export default withRouter(Filters);