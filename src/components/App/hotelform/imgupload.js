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
    this.removeImage=this.removeImage.bind(this);
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

removeImage = id => {
    this.setState({
      imagesPreviewUrls: this.state.imagesPreviewUrls.filter(image => image.public_id !== id)
    })
  }

    render() {
        let {imagesPreviewUrls} = this.state;

        return (
            <div>
                <label  className="btn btn-default btn-sm z-depth-0 mr-0 pl-2 pr-2 custom-file-upload waves-effect waves-light" htmlFor='file'>
                    <i className="fas fa-image fa-fw" aria-hidden="true"></i>
                    {/* <FontAwesomeIcon icon={faTimesCircle} size='2x' /> */}
                    <input className="upload" type='file' id='multi' onChange={this._handleImageChange} multiple />
                </label>
                {/* <FontAwesomeIcon icon={faTimesCircle} size='2x' /> */}
                {imagesPreviewUrls.map(function(imagePreviewUrl, i){
                    return (
                        <div>
                             <div 
        onClick={() => this.removeImage(imagePreviewUrl)} 
        className='delete'
      >
        <FontAwesomeIcon icon={faTimesCircle} size='2x' />
      </div>
                            <img key={i} className='fadein' src={imagePreviewUrl} />
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