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
            ApiService.getImages(store.getState())
            .then((response) => {
                this.setState({url: response.data.url})
                this.setState({comments: response.data.comments})
            });
        } 
        document.body.classList.add("stop-scroll");
        // document.querySelector(".main-page").classList.add("page-hide");
    }

    close = () => {
        store.dispatch( {type: false});
        this.setState({url: ""});
        this.setState({comments: []});
        this.setState({isImgLoad: false});
        document.body.classList.remove("stop-scroll");
        document.querySelector(".main-page").classList.remove("page-hide");
    }


    componentWillMount(){
        store.dispatch( {type: 242}); // Временно для тестирования!!!
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
                        <button className="button-close modal__button-close" onClick={this.close}></button>
                        <img className="modal__img" src={this.state.url} onLoad={this.imgLoad}/>
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