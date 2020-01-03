import React, {Component} from 'react';
import axios from 'axios';
import { store } from '../store';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          open: false,
          comments: [],
        }

        store.subscribe(() => this.active());
    }

    active() {
        this.setState({open: store.getState()})
        if (store.getState() !== false){
            axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + store.getState())
            .then((response) => {
                console.log(response.data.comments);
                this.setState({url: response.data.url})
                this.setState({comments: response.data.comments})
                // console.log(response.data.comments[0].date.year)
                let date = new Date(response.data.comments[0].date);
                console.log(date);
            });
        } 
    }

    getDate(oldDate) {
        let date = new Date(oldDate);
        console.log(date)
        return date.toString()
    }

    close = () => {
        store.dispatch( {type: false});
        this.setState({url: ""});
        this.setState({comments: []});
    }

    render() {
        return(
            <div>
                {this.state.open !== false &&
                <div className="modal">
                    <div className="modal__background"></div>
                    <div className="modal__content">
                        <button className="button-close modal__button-close" onClick={this.close}></button>
                        <img className="modal__img" src={this.state.url}/>
                        <ul className="comments modal__comments">
                            {this.state.comments.map(item => 
                                <li className="comments__item" key={item.id}>
                                    <time className="comments__date">{this.getDate(item.date)}</time>
                                    <p className="comments__text">{item.text}</p>
                                </li>)
                            }

                            {/* <li className="comments__item">
                                <time className="comments__date">18.12.2019</time>
                                <p className="comments__text">Отличное фото</p>
                            </li>     

                            <li className="comments__item">
                                <time className="comments__date">13.11.2019</time>
                                <p className="comments__text">Круто!</p>
                            </li>    */}
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default ModalComponent;