import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import "./index.css";
import NavBar from "../navbar/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
class LoginPage extends React.Component{
  constructor() {
        super();
        this.state = {
          form: {
            username:'',
            passwordHash:''
          },
          fields: {},
          errors: {},
          accessToken: ''
          };
        // this.changeHandler = this.changeHandler.bind(this);
        // this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    this.submitownerLoginForm = this.submitownerLoginForm.bind(this);
  }
 handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
  
  }
  
 submitownerLoginForm(e) {
      let res;
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["password"] = "";
         
          this.setState({fields:fields});
          let store = this.state;
          store.form.username = this.state.fields["username"];
          store.form.passwordHash = this.state.fields["password"];
          this.setState(store);
          console.log("Form username"+this.state.form.username);
          console.log("Form password"+this.state.form.passwordHash);

            const url = "http://localhost:9000/users/signin"; 
             let headers = new Headers();
         
             headers.append('Content-Type', 'application/json');
             headers.append('Accept', 'application/json');
         
             headers.append('Access-Control-Allow-Origin', url);
             headers.append('Access-Control-Allow-Credentials', 'true');
         
             headers.append('GET', 'POST','PUT');
             
             e.preventDefault();
                 fetch(url, {
                 headers: headers,
                 method: 'PUT',
                 body: JSON.stringify(this.state.form) 
             })
        //.then(response=>{console.log(response.text())})
       
        .then(console.log(this.state.form))
        
         .then(response=>{console.log(response.status)
          if(response.status==200){
            res = response.json()
              .then((responseData)=>{localStorage.setItem('accessToken',responseData.accessToken)
                                      this.setState(
                                        {accessToken:responseData.accessToken}
                                      )
                                      console.log("bearerToken:"+this.state.accessToken)
                                      //localStorage.setItem('accessToken',this.state.accessToken)
    
              //this.props.history.push(`/profileowner`);
                let path=`prehome`;
                this.props.history.push({
                  pathname: path,
                  state: {
                  name:this.state.form.username
                  }
                }); 
                 window.location.reload() 
                sessionStorage.setItem('oname',this.state.form.username)
             
              })
            }
            else 
            {
              alert("Invalid username or password");
            }
           
          })
           
          .catch(() => console.log("Can’t access " + url + " response. "))

      }
    }
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
      this.setState({
        errors: errors
      });
      return formIsValid;
    }

   render(){
    return (
      <div className="homeb">
        <div className="img">
            <NavBar/><br></br>
            <div className="mydivl">
                    <MDBCard>
                    <form  onSubmit={this.submitownerLoginForm}>
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign In</strong>
                    </h3>
                  </div>
                  <MDBInput
                      label="Your username"
                      group
                      name="username" type="text" value={this.state.fields.username} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.username}</div>
                    <MDBInput
                      label="Your password"
                      group
                      name="password" type="password" value={this.state.fields.password} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.password}</div>
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="submit"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                      name="submit" value="submit"
                    >
                      Sign In
                    </MDBBtn>
                </div>
                </MDBCardBody>
                </form>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">
                            Not a member?
                            <a href="/signup" className="blue-text ml-1">

                            Sign Up
                            </a>
                        </p>
                        </MDBModalFooter>
                    </MDBCard>
            </div>
          </div>
          <FooterPage/>
      </div>
    );
    }
}

export default LoginPage;