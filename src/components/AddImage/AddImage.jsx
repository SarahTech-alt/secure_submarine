import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import LocationAndTimePage from '../LocationAndTimePage/LocationAndTimePage';
import './AddImage.css'


class AddImage extends Component {





    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
        this.props.dispatch({ type: 'POST_IMAGE_URL', payload: info.fileUrl });
        console.log(this.state);
        this.setState({
            imageUrl: 'info.fileUrl'
        });
    }

    postNewLog = info => {
        this.props.dispatch({type: 'POST_NEW_LOG', payload: info})
    }


    render() {

        const s3Url = 'https://solospikebucket.s3.amazonaws.com';


        return (
            <div className="add-log">
                <form onSubmit={this.postNewLog}>
                <h1>Add New Log</h1>
                <input placeholder="Type of mushroom"
                /> <br /> <br />
                <DropzoneS3Uploader
                    className='dropzone'
                    onFinish={this.handleFinishedUpload}
                    s3Url={s3Url}
                    maxSize={1024 * 1024 * 5}
                    upload={{}}
                    >
                    <p>Click to add item</p>
                </DropzoneS3Uploader><br />
                <input type="text" placeholder="Additional details" /><br /><br />
                <button type="submit">Submit</button>
            </form>
            </div>
            
        )
    }
}


export default connect()(AddImage);