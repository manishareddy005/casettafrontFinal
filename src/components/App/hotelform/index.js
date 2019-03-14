import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import "./index.css";
import FooterPage from "../footer/index";
import "../image/index.css";
import "../index.css";
import NavBarOwner from "../NavbarOwner/index";
class HotelForm extends React.Component {

    constructor() {
        super();
        this.state = {
          form: {
            name:'',
            location: '',
            description:'',
            amenities:'',
            price:'',
            rating:'',
            url:''
          },
          fields: {},
          errors: {},
        };
         // this.changeHandler = this.changeHandler.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitHotelForm = this.submitHotelForm.bind(this);
      }
     handleChange(e) {
          let fields = this.state.fields;
          fields[e.target.name] = e.target.value;
          this.setState({
            fields
          });
      }

     submitHotelForm(e) {
          let res;
          e.preventDefault();
          if (this.validateForm()) {
              let fields = {};
              fields["name"] = "";
              fields["location"] = "";
              fields["description"] = ""; 
              fields["amenities"] = ""; 
              fields["price"] = ""; 
              fields["rating"] = "";
              fields["url"] = "";
              this.setState({fields:fields});
              let store = this.state;
              store.form.name = this.state.fields["name"];
              store.form.location = this.state.fields["location"];
              store.form.description = this.state.fields["description"];
              store.form.amenities = this.state.fields["amenities"];
              store.form.price = this.state.fields["price"];
              store.form.rating = this.state.fields["rating"];
              store.form.url = this.state.fields["url"];
              this.setState(store);
              console.log("Form name"+this.state.form.name);
              console.log("Form location"+this.state.form.location);
              console.log("Form description"+this.state.form.description);
              console.log("Form amenities"+this.state.form.amenities);
              console.log("Form price"+this.state.form.price);
              console.log("Form ranking"+this.state.form.rating);
              console.log("Form url"+this.state.form.url);
          var bearerToken = localStorage.getItem('accessToken');
            const url = "http://localhost:9000/hotels"; 
            var accesstoken = 'Bearer ' + bearerToken;
            console.log(accesstoken);
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
                    withCredentials:true,
                    credentials:'include',
                    headers:{
                      'Authorization':accesstoken,
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': url
                    },
                    body: JSON.stringify(this.state.form) 
                })
            .then(console.log(this.state.form))
            .then(response=>{console.log(response.stringify)
              if(response.status==200)
              {
                
                this.props.history.push(`/profileowner`);
              }
            })
            //.then(contents => {console.log("in signup fetch: "+ contents);})
            .catch(() => console.log("Can’t access " + url + " response. "))
        
          }
        }
        validateForm() {
    
          let fields = this.state.fields;
          let errors = {};
          let formIsValid = true;
      
          if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Please enter your name.";
          }
          if (!fields["location"]) {
            formIsValid = false;
            errors["location"] = "*Please enter the location.";
          }
          if (!fields["description"]) {
            formIsValid = false;
            errors["description"] = "*Please enter the description.";
          }
          if (!fields["amenities"]) {
            formIsValid = false;
            errors["amenities"] = "*Please enter the amenities";
          }
          if (!fields["price"]) {
            formIsValid = false;
            errors["price"] = "*Please enter the price.";
          }
          if (!fields["rating"]) {
            formIsValid = false;
            errors["rating"] = "*Please enter the ranking.";
          }
          if (typeof fields["rating"] !== "undefined") {
            if (!fields["rating"].match(/^[1-5]$/)) {
              formIsValid = false;
              errors["rating"] = "*Please enter valid rating (1-5)";
            }
          }
          if (!fields["url"]) {
            formIsValid = false;
            errors["url"] = "*Please enter the website url.";
          }
          this.setState({
            errors: errors
          });
          return formIsValid;
        }
      // changeHandler(e) {
      //   e.persist();
      //   let store = this.state;
      //   store.form[e.target.name] = e.target.value;
      //   this.setState(store);
      // }
    
      // submitHandler(e) { 
      //   var bearerToken = localStorage.getItem('accessToken');
      //   const url = "http://localhost:9000/hotels"; 
      //   var accesstoken = 'Bearer ' + bearerToken;
      //   console.log(accesstoken);
      //        let headers = new Headers();
         
      //        headers.append('Content-Type', 'application/json');
      //        headers.append('Accept', 'application/json');
         
      //        headers.append('Access-Control-Allow-Origin', url);
      //        headers.append('Access-Control-Allow-Credentials', 'true');
         
      //        headers.append('GET', 'POST');
             
      //        e.preventDefault();
      //        fetch(url, {
      //            headers: headers,
      //            method: 'POST',
      //            withCredentials:true,
      //           credentials:'include',
      //           headers:{
      //             'Authorization':accesstoken,
      //             'Content-Type': 'application/json',
      //             'Access-Control-Allow-Origin': url
      //           },
      //            body: JSON.stringify(this.state.form) 
      //        })
      //   .then(console.log(this.state.form))
      //   .then(response=>{console.log(response.stringify)
      //     if(response.status==200)
      //     {
            
      //       this.props.history.push(`/profileowner`);
      //     }
      //   })
      //   //.then(contents => {console.log("in signup fetch: "+ contents);})
      //   .catch(() => console.log("Can’t access " + url + " response. "))
        
       
      // }



    render() {
        const { form } = this.state;
        return(
          <div className="hotelformb">
            <div className="imgform">
                <NavBarOwner/><br></br>
                <div > 
                    <MDBCard className="mydivhf">
                        <form onSubmit={this.submitHotelForm}>
                      <MDBCardBody className="mx-4">
                        <div className="text-center">
                          <h3 className="dark-grey-text mb-5">
                            <strong>Hotel Details</strong>
                          </h3>
                        </div>
                        <MDBInput
                          label="Hotel Name"
                          group
                          name="name" type="text" value={this.state.fields.name} onChange={this.handleChange}
                        />
                        <div className="errorMsg">{this.state.errors.name}</div>
                        <MDBInput
                          label="Location"
                          group
                          name="location" type="text" value={this.state.fields.location} onChange={this.handleChange}
                        />
                        <div className="errorMsg">{this.state.errors.location}</div>
                        <div class="md-form mb-4 pink-textarea active-pink-textarea">
                            <textarea name="description" type="text" id="form18" class="md-textarea form-control" rows="9" value={this.state.fields.description} onChange={this.handleChange}></textarea>
                            <label for="form18">Description</label>
                            <br></br>
                        </div>
                        <div className="errorMsg">{this.state.errors.description}</div>
                        <div class="md-form mb-4 pink-textarea active-pink-textarea">
                            <textarea name="amenities" type="text" id="form18" class="md-textarea form-control" rows="9" value={this.state.fields.amenities} onChange={this.handleChange}></textarea>
                            <label for="form18">Amenities</label>
                            <br></br>
                        </div>
                        <div className="errorMsg">{this.state.errors.amenities}</div>
                        <MDBInput
                          label="Price (in Rs.)"
                          group
                          name="price" type="number" value={this.state.fields.price} onChange={this.handleChange}
                        />
                        <div className="errorMsg">{this.state.errors.price}</div>
                        <MDBInput
                          label="Ranking of the hotel (in stars)"
                          group
                          name="rating" type="number" value={this.state.fields.rating} onChange={this.handleChange}
                        />
                        <div className="errorMsg">{this.state.errors.rating}</div>
                        <MDBInput
                          label="Your Website"
                          group
                          name="url" type="url" value={this.state.fields.url} onChange={this.handleChange}
                        />
                        <div className="errorMsg">{this.state.errors.url}</div>
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
            </div>
            <FooterPage/>
          </div>
        );
      };
    }

export default HotelForm;