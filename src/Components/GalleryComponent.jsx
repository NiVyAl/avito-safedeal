import React, {Component} from 'react';
import axios from 'axios';
import ImgComponent from './ImgComponent';

class GalleryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        axios.get("https://boiling-refuge-66454.herokuapp.com/images")
        .then((response) => {
            console.log(response.data);
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