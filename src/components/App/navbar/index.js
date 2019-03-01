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
  import "./index.css";
  import Searchbar from "../searchbar";
  
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
            <Searchbar/>
            </NavItem>
              <NavItem>
                <NavLink href="/login" className="text-black"><b>Owner Login</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="text-black"><b>GitHub</b></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
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
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}
export default NavBar;