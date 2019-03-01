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
  import SearchBar from "../searchbar";
 import signout from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/logout.png";
 import profileo from "/Users/AkhilaV/Documents/casettafrontFinal/src/components/App/image/profile.png";

 class NavBarOwner extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
      <div>
      
        <Navbar color="none" light expand="md">
          <NavbarBrand href="/" className="text-black"><b>Casetta</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <SearchBar/>
            </NavItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <NavItem id="Popover1">
                <NavLink className="text-black"><img src={profileo} height="50%" width="50%"/></NavLink>
              </NavItem>
            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
         </Popover>
            {/* <NavItem>
                <NavLink href="/home" className="text-black"><img src={profileo} height="50%" width="50%"/></NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href="/home" className="text-black"><img src={signout} height="50%" width="50%"/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
export default NavBarOwner;