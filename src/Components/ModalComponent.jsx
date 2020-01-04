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

    componentWillMount(){
        document.addEventListener("keydown", this.escFunction, false);
    }

    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    active() {
        this.setState({open: store.getState()})
        if (store.getState() !== false){
            axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + store.getState())
            .then((response) => {
                this.setState({url: response.data.url})
                this.setState({comments: response.data.comments})
            });
        } 
    }

    getDate = (oldDate) => {
        let date = new Date(oldDate);
        console.log(`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`)
        let month = this.addNullToDate(date.getMonth()+1);
        let dateNumber = this.addNullToDate(date.getDate());
        return `${dateNumber}.${month}.${date.getFullYear()}`
    }

    addNullToDate(date) {
        if (date < 10) {
            date = "0" + date;
        }
        return date
    }

    close = () => {
        console.log("close");
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
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default ModalComponent;