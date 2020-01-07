import React, {Component} from 'react';
// import axios from 'axios';
import { store } from '../store';
import CommentsComponent from './CommentsComponent';
import AddCommentComponent from './AddCommentComponent';
import ApiService from "../service/ApiService";

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
            // axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + store.getState())
            // .then((response) => {
            //     this.setState({url: response.data.url})
            //     this.setState({comments: response.data.comments})
            // });
            ApiService.getImages(store.getState())
            .then((response) => {
                this.setState({url: response.data.url})
                this.setState({comments: response.data.comments})
            });
        } 
    }

    close = () => {
        store.dispatch( {type: false});
        this.setState({url: ""});
        this.setState({comments: []});
    }


    componentWillMount(){
        // store.dispatch( {type: 237}); // Временно для тестирования!!!
        document.addEventListener("keydown", this.escFunction, false);
    }

    escFunction = (e) => {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    render() {
        return(
            <div>
                {this.state.open !== false &&
                <div className="modal">
                    <div className="modal__background"></div>
                    <div className="modal__content">
                        <button className="button-close modal__button-close" onClick={this.close} tabIndex="1"></button>
                        <img className="modal__img" src={this.state.url}/>

                        <div className="modal__comments">
                            <CommentsComponent comments={this.state.comments}/>
                        </div>

                        <div className="modal__add-comment">
                            <AddCommentComponent photoId={store.getState()}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default ModalComponent;