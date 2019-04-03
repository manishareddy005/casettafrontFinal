import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle ,faImages} from '@fortawesome/free-solid-svg-icons';




class ImageUpload extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
        files: [],
        imagesPreviewUrls: []
       };
    //this.removeImage=this.removeImage.bind(this);
    //this.onDeleteImage=this.onDeleteImage.bind(this);
    }
    _handleImageChange = e =>{
        e.preventDefault();

        // FileList to Array
        let files = Array.from(e.target.files);

        // File Reader for Each file and and update state arrays
        files.forEach((file, i) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState(prevState => ({
                    files: [...prevState.files, file],
                    imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader.result]
                }));
            }

            reader.readAsDataURL(file);
        });
    }

 removeImage(i){
   console.log("i",i);
   console.log(this.state.imagesPreviewUrls);
   let remimg=this.state.imagesPreviewUrls.splice(i,1)
    this.setState({
      imagesPreviewUrls: remimg
     
    })
    console.log(this.state.imagesPreviewUrls);
    this.setState({
        imagesPreviewUrls: this.state.imagesPreviewUrls
       
      })
     
  }
  

    render() {
        let {imagesPreviewUrls} = this.state;
        // const onDeleteImage=function(i){
        //     console.log("hello");
        //     console.log("i",i);
        //     {this.removeImage(i)}
        //   }
        return (
            <div>
                <label  className="btn btn-default btn-sm z-depth-0 mr-0 pl-2 pr-2 custom-file-upload waves-effect waves-light" htmlFor='file'>
                    <i className="fas fa-image fa-fw" aria-hidden="true"></i>
                    {/* <FontAwesomeIcon icon={faTimesCircle} size='2x' /> */}
                    <input className="upload" type='file' id='multi' onChange={this._handleImageChange} multiple />
                </label>
                {/* <FontAwesomeIcon icon={faTimesCircle} size='2x' /> */}
                {this.state.imagesPreviewUrls.map((imagePreviewUrl, index)=>{
                    
                    return (
                        <div key={index}>
                           
                     <FontAwesomeIcon icon={faTimesCircle} size='2x' onClick={this.removeImage.bind(this,index)}/>
     
                            <img key={index} className='fadein' src={imagePreviewUrl} />
                        </div>
                        )
                })}
            </div>
        )
    }
}


export default ImageUpload;





// import React, { Component } from 'react'
// import Spinner from './Spinner'
// import Images from './Images'
// import Buttons from './Buttons'
// import { API_URL } from './config'
// import './App.css'

// export default class ImageUpload extends Component {
  
//   state = {
//     uploading: false,
//     images: []
//   }

//   onChange = e => {
//     const files = Array.from(e.target.files)
//     this.setState({ uploading: true })

//     const formData = new FormData()

//     files.forEach((file, i) => {
//       formData.append(i, file)
//     })

//     fetch(`${API_URL}/image-upload`, {
//       method: 'POST',
//       body: formData
//     })
//     .then(res => res.json())
//     .then(images => {
//       this.setState({ 
//         uploading: false,
//         images
//       })
//     })
//   }

//   removeImage = id => {
//     this.setState({
//       images: this.state.images.filter(image => image.public_id !== id)
//     })
//   }
  
//   render() {
//     const { uploading, images } = this.state

//     const content = () => {
//       switch(true) {
//         case uploading:
//          // return <Spinner />
//         case images.length > 0:
//           return <Images images={images} removeImage={this.removeImage} />
//         default:
//           return <Buttons onChange={this.onChange} />
//       }
//     }

//     return (
//       <div>
//         <div className='buttons'>
//           {content()}
//         </div>
//       </div>
//     )
//   }
//}