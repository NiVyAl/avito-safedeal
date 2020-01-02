import React, {Component} from 'react';
import axios from 'axios';
import ImgComponent from './ImgComponent';

class GalleryComponent extends Component {

    getPhotos() {
        console.log("get");
        axios.get("https://boiling-refuge-66454.herokuapp.com/images")
        .then((response) => {
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++){
                console.log(response.data[i].url);
            }
        });
    }

    render(){
        return(
            <div className="gallery">
                <ImgComponent url="https://picsum.photos/id/237/300/200"/>
                <ImgComponent/>
                <ImgComponent/>
                <ImgComponent/>
                <ImgComponent/>
                <ImgComponent/>
            </div>
        )
    }
}

export default GalleryComponent;