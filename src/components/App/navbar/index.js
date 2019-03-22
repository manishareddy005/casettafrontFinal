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
  import {  MDBRangeInput, MDBBtn } from "mdbreact";
  import "./index.css";
import Search from '../Prehome/search';
import '../Prehome/search.css';
import Filters from "./filters"
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handlePricingChange = this.handlePricingChange.bind(this);
    this.onOwnerLogged = this.onOwnerLogged.bind(this);
    this.state = {
      isOpen: false,
      pricevalue: 0
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handlePricingChange = value => {
    this.setState({ value });
  };

  onOwnerLogged() {
    if(this.props.oname == null) {
      return (
        <NavItem>
        <NavLink href="/login" className="text-black"><b>Owner</b></NavLink>
      </NavItem>
      );
    } else {
      return (
        <div className="row">
        <NavLink style={{marginLeft:"2em",marginTop:"0.5em",color:"black"}} href="/profileowner" className="text-black"><b>My Profile</b></NavLink>
      </div>
      );
    }
  }

  render() {
    let price;
    return (
      <div>
      
        <Navbar color="none" light expand="md">
          <NavbarBrand href="/"><b><img src = {require("/Users/etrupthi/Documents/casettafrontFinal/src/components/App/image/logo1.png")} width="150" height = "80" ></img></b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem style={{marginLeft:"-40em"}}>
            <Filters history={this.props.history}/>
           
            </NavItem>&nbsp;&nbsp;&nbsp;&nbsp;
            {this.onOwnerLogged()}
              {/* <NavItem>
                <NavLink href="/login" className="text-black"><b>Owner</b></NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="text-black"><b>GitHub</b></NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-black">
                <b>Price</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    1000
                  </DropdownItem>
                  <DropdownItem>
                    2000
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
export default NavBar;