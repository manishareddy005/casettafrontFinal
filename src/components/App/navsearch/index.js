import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const NavSearch = () => {
  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon  />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>
  );
}

export default NavSearch;