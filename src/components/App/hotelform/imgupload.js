import React from "react";
import { objectOf } from "prop-types";
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
        // axios.post(url,formdata)
        // .then(res=>{console.log("res:"+res)});
    //   let headers = new Headers();

    //         const formdata=new FormData()
    //         formdata.append("file",this.state.file);

    //             headers.append('Content-Type', 'multipart/form-data');
    //             headers.append('Accept', 'application/json');
            
    //             headers.append('Access-Control-Allow-Origin', url);
    //             headers.append('Access-Control-Allow-Credentials', 'true');
            
    //             headers.append('GET', 'POST');
                
    //             e.preventDefault();
    //             fetch(url, {
    //                 headers: headers,
    //                 method: 'POST',
    //                 withCredentials:true,
    //                 credentials:'include',
    //                 headers:{
    //                   'Access-Control-Allow-Origin': url
    //                 },
    //                 body: formdata
    //             })
               
    //             .then(response=>{console.log("response img:"+(response))
    //           if(response.status==200)
    //           {
    //             console.log("success")
    //           }
          //  })
            //.then(contents => {console.log("in signup fetch: "+ contents);})
            //.catch(() => console.log("Can’t access " + url + " response. "))
        
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
        $imagePreview = (<img style={{width:"10%",height:"10%"}} src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }
  export default ImageUpload;