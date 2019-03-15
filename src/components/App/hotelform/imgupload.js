import React from "react";
import { objectOf } from "prop-types";
import NavBarOwner from "../NavbarOwner/index";
import NavBar from "../navbar/index";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import { Promise, allResolved, resolve, promised } from "q";
class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            file: '',
            imagePreviewUrl: '',
            result:''
        };
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
      const url = "http://localhost:9000/images"; 
      const formdata=new FormData()
        formdata.append("file",this.state.file);
        
      let headers = new Headers();

          formdata.append("file",this.state.file);

          headers.append('Content-Type', 'multipart/form-data');
          headers.append('Accept', 'application/json');
      
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
      
          headers.append('GET', 'POST');
          
          e.preventDefault();
          
          fetch(url, {
            headers: headers,
            method: 'POST',
            withCredentials:true,
            credentials:'include',
            headers:{
              'Access-Control-Allow-Origin': url
            },
            body: formdata
          })               
          .then(r=> {r.json()
           .then(response=>{console.log(response)
              this.setState ({
                result: JSON.stringify(response)
              })
              console.log("result image:"+this.state.result)
              if(r.status==200){
                console.log("success")
              }
             
           })
          })
          .catch(() => console.log("Can’t access " + url + " response. "))
        
     }
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img style={{width:"20%",height:"20%"}} src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="hotelformb">
        <div className="imgform">
            <NavBar/><br></br>
        <div > 
        <MDBCard className="mydivhf">
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}><br></br>
          <MDBCardBody className="mx-4">
                    <div className="text-center">
                     <h3 className="dark-grey-text mb-5">
                        <strong>Step 2: Upload hotel images</strong>
                     </h3>
                    </div>
                &nbsp;&nbsp;&nbsp;&nbsp;<input className="fileInput" 
                type="file" 
                onChange={(e)=>this._handleImageChange(e)} /><br></br>
            <div className="imgPreview" ><br></br>
             {$imagePreview  }
            </div><br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;<button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </MDBCardBody>
          </form>
        </div>
        </MDBCard>
        </div>
        </div>
        </div>
      )
    }
  }
  export default ImageUpload;