import React, {Component} from 'react';
import { store } from '../store';

class ImgComponent extends Component {
    openModal = (e) => {
        console.log(this.props.id);
        store.dispatch( {type: this.props.id});
    }

    render() {
        return(
            <img className="gallery__img" src={this.props.url} onClick={this.openModal}/>
        )
    }
}

export default ImgComponent;