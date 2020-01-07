import React, {Component} from 'react';
import { store } from '../store';

class ImgComponent extends Component {
    openModal = (e) => {
        store.dispatch( {type: this.props.id});
    }

    render() {
        return(
            <button className="gallery__img-container" onClick={this.openModal}>
                <img className="gallery__img" src={this.props.url}/>
            </button>
        )
    }
}

export default ImgComponent;