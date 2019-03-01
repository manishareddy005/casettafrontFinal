import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import "./index.css";

class HotelForm extends React.Component {

    constructor() {
        super();
        this.state = {
          form: {
            name:'',
            location: '',
            description:'',
            price:'',
            rating:'',
            url:''

          }
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
      }
      changeHandler(e) {
        e.persist();
        let store = this.state;
        store.form[e.target.name] = e.target.value;
        this.setState(store);
      }
    
      submitHandler(e) { 
    
        const url = "http://localhost:9000/hotels"; 
             let headers = new Headers();
         
             headers.append('Content-Type', 'application/json');
             headers.append('Accept', 'application/json');
         
             headers.append('Access-Control-Allow-Origin', url);
             headers.append('Access-Control-Allow-Credentials', 'true');
         
             headers.append('GET', 'POST');
             
             e.preventDefault();
             fetch(url, {
                 headers: headers,
                 method: 'POST',
                 body: JSON.stringify(this.state.form) 
             })
        .then(console.log(this.state.form))
        .then(response=>{console.log(response.stringify)
        })
        //.then(contents => {console.log("in signup fetch: "+ contents);})
        .catch(() => console.log("Can’t access " + url + " response. "))
       
      }



    render() {
        const { form } = this.state;
        return(
        <div > 
                <MDBCard className="mydiv">
                    <form onSubmit={this.submitHandler}>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Hotel Details</strong>
                      </h3>
                    </div>
                    <MDBInput
                      label="Hotel Name"
                      group
                      name="name" type="text" value={form.name} onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Location"
                      group
                      name="location" type="text" value={form.location} onChange={this.changeHandler}
                    />
                    <div class="md-form mb-4 pink-textarea active-pink-textarea">
                        <textarea name="description" type="text" id="form18" class="md-textarea form-control" rows="9" value={form.description} onChange= {this.changeHandler}></textarea>
                        <label for="form18">Description</label>
                        <br></br>
                    </div>
                    <MDBInput
                      label="Price"
                      group
                      name="price" type="number" value={form.price} onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Rating(stars)"
                      group
                      name="rating" type="number" value={form.rating} onChange={this.changeHandler}
                    />
                    <MDBInput
                      label="Your Website"
                      group
                      name="url" type="url" value={form.url} onChange={this.changeHandler}
                    />
                    <div className="text-center mb-3">
                      <MDBBtn  
                        type="submit"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                      >
                        Submit
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                  </form>
                </MDBCard>
          </div>
        );
      };
    }

export default HotelForm;