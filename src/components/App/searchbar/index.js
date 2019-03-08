import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import HotelList from "../hlist/index.js";

// class SearchBar extends React.Component{
//   render() {
//   return (
//     <MDBCol md="6">
//       <form className="form-inline mt-4 mb-4">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </form>
//     </MDBCol>
//   );
// }
// }

// export default SearchBar;



import ReactSearchBox from 'react-search-box'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state={
      search:'',
      sdata:[]
    };
  }
  // data = [
  //   {
  //     key: 'hyderabad',
  //     value: 'Hyderabad',
  //   },
  //   {
  //     key: 'paris',
  //     value: 'Paris, France',
  //   },
  //   {
  //     key: 'maryland',
  //     value: 'Mary Land, USA',
  //   },
  //   {
  //     key: 'melbourne',
  //     value: 'Melbourne, Australia',
  //   },
  // ]

  onSelect(){
    //alert("Hai");
    console.log(this.state.search);
  }
  updateSearch(event){
    if(event.key!='Enter'){
    this.setState({search:event.target.value.substr(0,20)});
    }
    else
    {
      console.log("search value"+this.state.search);
      let params={
        "location":this.state.search,
        //"price":null
      }

      let query=Object.keys(params).map(k=>encodeURIComponent(k)+'='+encodeURIComponent(params[k])).join('&');
      const url = "http://localhost:9000/hotels?"+query; 
          let headers = new Headers();
      
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
      
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
      
          headers.append('GET', 'POST');
          
      
          fetch(url, {
              headers: headers,
              method: 'GET'
          })
          .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ contents);
                              this.setState ({
                              sdata : contents})
                })
                .then(console.log("Fetched data:"+JSON.stringify(this.state.sdata)))
          .catch(() => console.log("Can’t access " + url + " response. "))



      }    
      // this.props.history.push(`/home`)                
    }
  render() {
    return (
      // <ReactSearchBox 
      //   placeholder="Location,Hotel Name"
      //   value={this.state.search}
      //   data={this.data}
      //   onSelect={this.updateSearch.bind(this)}
      // />
      <input type="text" placeholder="Location,Hotel Name" value={this.state.search} onChange={this.updateSearch.bind(this)} onKeyPress={this.updateSearch.bind(this)}/>

    )
  }
}
