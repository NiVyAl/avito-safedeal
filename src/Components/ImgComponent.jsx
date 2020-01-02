import React, {Component} from 'react';

class ImgComponent extends Component {
    render() {
        return(
            <img className="gallery__img" src={this.props.url}/>
        )
    }
}

export default ImgComponent;