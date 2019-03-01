import React from "react";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
          username:'',
        email: '',
        passwordHash:''
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

    const url = "http://localhost:9000/users"; 
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
    if(response.status==200)
    {

      this.props.history.push(`/login`)
    }
    else
    {
      alert("User error");
    }
    })
    .then(contents => {console.log("in signup fetch: "+ contents);})
    .catch(() => console.log("Can’t access " + url + " response. "))
   
  }

  render(){
    const { form } = this.state;
  return (
    <div className="mydivs">
          <MDBCard>
          <form  onSubmit={this.submitHandler}>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBInput
                label="Your username"
                group
                name="username" type="text" value={form.username} onChange={this.changeHandler}
              />
              <MDBInput
                label="Your email"
                group
                name="email" type="text" value={form.email} onChange={this.changeHandler}
              />
              <MDBInput
                label="Your password"
                group
                name="passwordHash" type="password" value={form.passwordHash} onChange={this.changeHandler}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  name="submit" value="submit"
                >
                  Sign Up
                </MDBBtn>
             </div>
            </MDBCardBody>
            </form>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Have an account?
                <a href="/login" className="blue-text ml-1">
                 Login
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
    </div>
  );
  }
};


export default SignUpPage;
