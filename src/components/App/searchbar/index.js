import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

class SearchBar extends React.Component{
  render() {
  return (
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Location, Hotel Name" aria-label="Search" />
      </form>
    </MDBCol>
  );
}
}

export default SearchBar;


// import React, { Component } from 'react'
// import ReactSearchBox from 'react-search-box'

// export default class SearchBar extends React.Component {
//   data = [
//     {
//       key: 'hyderabad',
//       value: 'Hyderabad, India',
//     },
//     {
//       key: 'paris',
//       value: 'Paris, France',
//     },
//     {
//       key: 'maryland',
//       value: 'Mary Land, USA',
//     },
//     {
//       key: 'melbourne',
//       value: 'Melbourne, Australia',
//     },
//   ]

//   render() {
//     return (
//       <ReactSearchBox
//         placeholder="Location,Hotel Name"
//         value="Doe"
//         data={this.data}
//         callback={record => console.log(record)}
//       />
//     )
//   }
// }