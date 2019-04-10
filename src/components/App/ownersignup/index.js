import React from "react";
import "./index.css";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import NavBar from "../navbar/index";
import FooterPage from "../footer";
import "../image/index.css";
import "../index.css";
class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        username:'',
        email: '',
        mobileno: '',
        passwordHash:''
      },
      fields: {},
      errors: {}
    };
    // this.changeHandler = this.changeHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitownerRegistrationForm = this.submitownerRegistrationForm.bind(this);
  }
  
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitownerRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
        fields["password"] = "";
        fields["confirmpassword"] = "";
        this.setState({fields:fields});
        let store = this.state;
        store.form.username = this.state.fields["username"];
        store.form.email = this.state.fields["emailid"];
        store.form.mobileno = this.state.fields["mobileno"];
        store.form.passwordHash = this.state.fields["password"];
        this.setState(store);
        console.log("Form username"+this.state.form.username);
        console.log("Form email"+this.state.form.email);
        console.log("Form mobile"+this.state.form.mobileno);
        console.log("Form password"+this.state.form.passwordHash);
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
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password(must contain atleast small letter,1 capital letter,1 special symbol,1 no) .";
      }
    }
    if (!fields["confirmpassword"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please confirm your password.";
    }
    if (typeof fields["confirmpassword"] !== "undefined") {
      if (fields["password"]!=fields["confirmpassword"]) {
        formIsValid = false;
        errors["confirmpassword"] = "*Passwords dont match";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render(){
   //const { form } = this.state;
  return (
    <div className="homeb">
      <div className="img">
          <NavBar/><br></br>
          <div className="mydivs">
                <MDBCard>
                <form  onSubmit={this.submitownerRegistrationForm}>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Sign Up</strong>
                      </h3>
                    </div>
                    <MDBInput
                      label="Your username"
                      group
                      name="username" type="text" value={this.state.fields.username} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.username}</div>
                    <MDBInput
                      label="Your email"
                      group
                      name="emailid" type="text" value={this.state.fields.emailid} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                    <MDBInput
                      label="Your mobileno"
                      group
                      name="mobileno" type="text" value={this.state.fields.mobileno} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.mobileno}</div>
                    <MDBInput
                      label="Your password"
                      group
                      name="password" type="password" value={this.state.fields.password} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <MDBInput
                      label="Confirm password"
                      group
                      name="confirmpassword" type="password" value={this.state.fields.confirmpassword} onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.confirmpassword}</div>
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
        </div>
      <FooterPage/>
    </div>
  );
  }
};


export default SignUpPage;
