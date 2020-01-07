import React, {Component} from 'react';
import axios from 'axios';
import ImgComponent from './ImgComponent';
import ApiService from "../service/ApiService";

class GalleryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        ApiService.getImages()
        .then((response) => {
            this.setState({items: response.data})
        });
    }

    render(){
        return(
            <div className="gallery">
                {this.state.items.map(item => <ImgComponent url={item.url} id={item.id} key={item.id}/>)}
            </div>
        )
    }
}

export default GalleryComponent;