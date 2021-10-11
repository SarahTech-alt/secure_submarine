import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

class AddImage extends Component {

    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        this.props.dispatch({type: 'POST_IMAGE_URL', payload: info.fileUrl});
      }
    
      render() {
     
        const s3Url = 'https://solospikebucket.s3.amazonaws.com';
    
        return (
          <DropzoneS3Uploader
            onFinish={this.handleFinishedUpload}
            s3Url={s3Url}
            maxSize={1024 * 1024 * 5}
            upload={{}}
          />
        )
      }
    }


export default connect()(AddImage);