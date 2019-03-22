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
      amenities: {},
      form: {
        name:'',
        location: '',
        description:'',
        amenities: {},
        sprice:'',
        dprice:'',
        suprice:'',
        rating:'',
        url:'',
        imageUrls:[]
      },
      fields: {},
      errors: {},
      file: '',
      imagePreviewUrl: '',
      result:'',
      img:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHotelForm = this.submitHotelForm.bind(this);
    this.onAmenityChange=this.onAmenityChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
    const url = "http://localhost:9000/images"; 
    const formdata=new FormData()
      formdata.append("file",this.state.file);
      
    let headers = new Headers();

        formdata.append("file",this.state.file);

        headers.append('Content-Type', 'multipart/form-data');
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
            'Access-Control-Allow-Origin': url
          },
          body: formdata
        })               
        .then(r=> {r.json()
         .then(response=>{console.log(response)
            this.setState ({
              result: JSON.stringify(response.image_url)
            })
            console.log("result image:"+this.state.result.replace('\"','',))
            this.setState ({
              result: this.state.result.replace('\"','',)
            })
            console.log("result image:"+this.state.result.replace('\"','',))
            this.setState ({
              result: this.state.result.replace('\"','',)
            })
            if(r.status==200){
              console.log("success")
              this.setState(
                {
                  img:this.state.img.concat(this.state.result)
                })
                console.log("img in state appending"+this.state.img)
            }
           
         })
        })
        .catch(() => console.log("Can’t access " + url + " response. "))
      
   }
   onAmenityChange(e){
    this.state.amenities[e.target.value]=true;
    console.log("amenities:"+e.target.value+"="+this.state.amenities[e.target.value])
 }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
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
          fields["sprice"] = ""; 
          fields["dprice"] = ""; 
          fields["suprice"] = ""; 
          fields["rating"] = "";
          fields["url"] = "";
          this.setState({fields:fields});
          let store = this.state;
          store.form.name = this.state.fields["name"];
          store.form.location = this.state.fields["location"];
          store.form.description = this.state.fields["description"];
          store.form.amenities = this.state.amenities;
          store.form.sprice = this.state.fields["sprice"];
          store.form.dprice = this.state.fields["dprice"];
          store.form.suprice = this.state.fields["suprice"];
          store.form.rating = this.state.fields["rating"];
          store.form.url = this.state.fields["url"];
          store.form.imageUrls=this.state.img;
          this.setState(store);
          console.log("Form name"+this.state.form.name);
          console.log("Form location"+this.state.form.location);
          console.log("Form description"+this.state.form.description);
          console.log("Form amenities"+this.state.form.amenities);
          console.log("Form price"+this.state.form.price);
          console.log("Form ranking"+this.state.form.rating);
          console.log("Form url"+this.state.form.url);
          console.log("Form imgurl"+this.state.form.imageUrls);
      var bearerToken = localStorage.getItem('accessToken');
        const url = "http://localhost:9000/hotel"; 
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
      if (!fields["sprice"]) {
        formIsValid = false;
        errors["sprice"] = "*Please enter the single room price.";
      }
      if (!fields["dprice"]) {
        formIsValid = false;
        errors["dprice"] = "*Please enter the double room price.";
      }
      if (!fields["suprice"]) {
        formIsValid = false;
        errors["suprice"] = "*Please enter the suite price.";
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

render() {
  let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img style={{width:"20%",height:"20%"}} src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
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
                <div className="errorMsg" >{this.state.errors.name}</div>
                <MDBInput
                  label="Location"
                  group
                  name="location" type="text" value={this.state.fields.location} onChange={this.handleChange}
                 
                />
                <div className="errorMsg">{this.state.errors.location}</div>
                <div class="md-form mb-4 pink-textarea active-pink-textarea">
                 <label for="form18">Description</label>
                    <textarea name="description" type="text" id="form18" class="md-textarea form-control" rows="9" value={this.state.fields.description} onChange={this.handleChange} ></textarea>
                    
                    <br></br>
                </div>
                <div className="errorMsg">{this.state.errors.description}</div>
                <h5><b>Amenities</b></h5>
                   <div className="cs1" > 
                       <div className="row">  
                          <div className="column">
                               <input id="pool" type="checkbox" name="amenity" value="pool" onChange={this.onAmenityChange}/>
                               <label for="pool">&nbsp;&nbsp;Pool</label>
                               <br/>
                               <input id="gym" type="checkbox" name="amenity" value="gym" onChange={this.onAmenityChange}/>
                               <label for="gym">&nbsp;&nbsp;Fitness Centre</label>
                               <br/>
                               <input id="parking" type="checkbox" name="amenity" value="parking" onChange={this.onAmenityChange}/>
                               <label for="parking">&nbsp;&nbsp;Valet Parking </label>
                               <br/>
                               <input id="business" type="checkbox" name="amenity" value="business" onChange={this.onAmenityChange}/>
                               <label for="business">&nbsp;&nbsp;Business Centre</label>
                               <br></br>
                               <input id="breakfast" type="checkbox" name="amenity" value="breakfast" onChange={this.onAmenityChange}/>
                               <label for="breakfast">&nbsp;&nbsp;Complimentary Breakfast</label>
                               <br/>
                               <input id="bar" type="checkbox" name="amenity" value="bar" onChange={this.onAmenityChange}/>
                               <label for="bar">&nbsp;&nbsp;Bar or Lounge</label>
                               <br/>
                               <input id="ocheckin" type="checkbox" name="amenity" value="ocheckin" onChange={this.onAmenityChange}/>
                               <label for="ocheckin">&nbsp;&nbsp;Online Checkin </label>
                               <br/>
                          </div> 
                          <div className="column" style={{marginLeft:"5em"}}>
                               <input id="pets" type="checkbox" name="amenity" value="pets" onChange={this.onAmenityChange}/>
                               <label for="pets">&nbsp;&nbsp;Pet-friendly </label>
                               <br/>
                               <input id="playarea" type="checkbox" name="amenity" value="playarea" onChange={this.onAmenityChange}/>
                               <label for="playarea">&nbsp;&nbsp;Play area </label>
                               <br/>
                               <input id="library" type="checkbox" name="amenity" value="library" onChange={this.onAmenityChange}/>
                               <label for="library">&nbsp;&nbsp;Library</label>
                               <br/>
                               <input id="theatre" type="checkbox" name="amenity" value="theatre" onChange={this.onAmenityChange}/>
                               <label for="theatre">&nbsp;&nbsp;Theatre</label>
                               <br/>
                               <input id="laundry" type="checkbox" name="amenity" value="laundry" onChange={this.onAmenityChange}/>
                               <label for="breakfast">&nbsp;&nbsp;Laundry</label>
                               <br/>
                               <input id="handicapped" type="checkbox" name="amenity" value="handicapped" onChange={this.onAmenityChange}/>
                               <label for="handicapped">&nbsp;&nbsp;Handicapped Facilities </label>
                               <br/>
                               <input id="medical" type="checkbox" name="amenity" value="medical" onChange={this.onAmenityChange}/>
                               <label for="medical">&nbsp;&nbsp;Medical Aid </label>
                               <br/>
                        </div>
                     </div>  

                     </div> 
                     <h5><b>In-Room Amenities</b></h5>   
                       <div className="cs">      
                               <input id="wifi" type="checkbox" name="amenity" value="wifi" onChange={this.onAmenityChange}/>
                               <label for="wifi">&nbsp;&nbsp;Wifi</label>
                               <br/>
                               <input id="airConditioning" type="checkbox" name="amenity" value="airConditioner" onChange={this.onAmenityChange}/>
                               <label for="airConditioning">&nbsp;&nbsp;Air Conditioning</label>
                               <br/>
                               <input id="iron" type="checkbox" name="amenity" value="iron"onChange={this.onAmenityChange}/>
                               <label for="iron">&nbsp;&nbsp;Iron</label>
                               <br/>
                               <input id="fridge" type="checkbox" name="amenity" value="fridge"onChange={this.onAmenityChange}/>
                               <label for="fridge">&nbsp;&nbsp;Mini Fridge/Bar</label>
                               <br/>
                               <input id="refreshments" type="checkbox" name="amenity" value="refreshments"onChange={this.onAmenityChange}/>
                               <label for="refreshments">&nbsp;&nbsp;Refreshments </label>
                               <br/>
                               <input id="connrooms" type="checkbox" name="amenity" value="connrooms"onChange={this.onAmenityChange}/>
                               <label for="connrooms">&nbsp;&nbsp;Connecting Rooms </label>
                               <br/>
                     </div> 
                     <br></br> 
                {/* <div class="md-form mb-4 pink-textarea active-pink-textarea"> */}
                    {/* <textarea name="amenities" type="text" id="form18" class="md-textarea form-control" rows="9" value={this.state.fields.amenities} onChange={this.handleChange} ></textarea>
                    <label for="form18">Amenities</label>
                    <br></br>
                </div>
                <div className="errorMsg">{this.state.errors.amenities}</div> */}
                <MDBInput
                  label="Single room Price (in Rs.)"
                  group
                  name="sprice" type="number" value={this.state.fields.sprice} onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.sprice}</div>
                <MDBInput
                  label="Double room Price (in Rs.)"
                  group
                  name="dprice" type="number" value={this.state.fields.dprice} onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.dprice}</div>
                <MDBInput
                  label="Suite Price (in Rs.)"
                  group
                  name="suprice" type="number" value={this.state.fields.suprice} onChange={this.handleChange}
                />
                <div className="errorMsg">{this.state.errors.suprice}</div>
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
                <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} /><br></br>
                <div className="imgPreview" ><br></br>
                  {$imagePreview  }
                </div><br></br>
                <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button><br></br>
                <div className="text-center mb-3">
                <br></br>
                  <MDBBtn  type="submit" gradient="blue" rounded className="btn-block z-depth-1a">Submit</MDBBtn>
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