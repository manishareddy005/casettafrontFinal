import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
  import "./index.css";
 import signout from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logout.png";
 import profileo from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/profile.png";
 import '../Prehome/search.css';

 class NavBarOwner extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.state = {
      userdata:{
        username:'',
        email:''
      },
      
      isOpen: false,
      popoverOpen: false
    };
  }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//       popoverOpen: !this.state.popoverOpen,
//       .then(responseJson => {
//         this.setState ({
//         userdata: responseJson})
// })
//     });
//   }

  componentDidMount() {
    var result;
      var bearerToken = localStorage.getItem('accessToken');
      console.log("Bearer:"+bearerToken)
        const url = "http://localhost:9000/users/me";
        var accesstoken = 'Bearer ' + bearerToken;

        console.log(accesstoken);

        fetch(url,{
          method:'GET',
          withCredentials:true,
          credentials:'include',
          headers:{
            'Authorization':accesstoken,
            'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': url
          }
        })
        
        .then((response)=>{response.json()
        .then(responseJson => {
                            this.setState ({
                                userdata: responseJson
                                })
             })
          })
       .then((responseJson)=>{console.log("usename navbarowner:" + this.state.userdata.username)})
       //this.props.callbackFromParent(this.state.userdata.username);
  }

  toggle(){
    this.setState ({
      isOpen: !this.state.isOpen,
      popoverOpen: !this.state.popoverOpen
      })
  }
  onSignOut(e){
    var bearerToken = localStorage.getItem('accessToken');
        const url = "http://localhost:9000/users/signout";
        var accesstoken = 'Bearer ' + bearerToken;

        console.log("signout accesstoken"+accesstoken);
        
        fetch(url,{
          method:'PUT',
          withCredentials:true,
          credentials:'include',
          headers:{
            'Authorization':accesstoken,
            'Content-Type': 'text/plain',
           'Access-Control-Allow-Origin': url
          }
        })
        .then(
            sessionStorage.clear())
  }


  render() {
    return (
      <div>
      
        <Navbar color="none" light expand="md">
          <NavbarBrand className="text-black"><b><img src = {require("/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logo1.png")} width="200" height = "100" ></img></b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            {/* <Search  history={this.props.history}/> */}
            </NavItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavItem id="Popover1">
                <NavLink className="text-black" onClick={this.onuserClick} ><img src={profileo} height="50%" width="50%"/></NavLink>
              </NavItem>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Your Profile</PopoverHeader>
          <PopoverBody>
          <span className="details" >Username: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.userdata.username}</span><br></br>
          <span className="details" >Email: &nbsp;&nbsp;&nbsp;&nbsp;{this.state.userdata.email}</span><br></br>
          </PopoverBody>
         </Popover>
            {/* <NavItem>
                <NavLink href="/home" className="text-black"><img src={profileo} height="50%" width="50%"/></NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/login
                " className="text-black" onClick={this.onSignOut}><img src={signout} height="50%" width="50%"/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
export default NavBarOwner;
