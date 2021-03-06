import React, {Component} from 'react';
import ApiService from "../service/ApiService";

class AddCommentComponent extends Component {
    sendComment = (e) => {
        e.preventDefault();
        let data = {};
        for (let i in this.state) {    
            if (this.state[i] !== "") {
                data[i] = this.state[i]   
            }
        };
        console.log(data);
        ApiService.addComment(data, this.props.photoId)
            .then(response => {
                console.log(response);
            }); 
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return(
            <form className="add-comment" onSubmit={this.sendComment}>
                <input id="name" onChange={this.handleChange} className="input-text add-comment__input" type="name" placeholder="Ваше имя" required/>
                <input id="comment" onChange={this.handleChange} className="input-text add-comment__input" type="text" placeholder="Ваш комментарий" autoComplete="off" required/>
                <button className="button add-comment__button" type="submit">Оставить комментарий</button>
            </form>
        )
    }
}

export default AddCommentComponent;