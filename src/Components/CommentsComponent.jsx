import React, {Component} from 'react';

class CommentsComponent extends Component {
    getDate = (date) => {
        date = new Date(date);
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

    render(){
        return(
            <div>
            {this.props.comments.length > 0 &&
                <ul className="comments">
                    {this.props.comments.map(item => 
                        <li className="comments__item" key={item.id}>
                            <time className="comments__date">{this.getDate(item.date)}</time>
                            <p className="comments__text">{item.text}</p>
                        </li>)
                    }
                </ul>
            }
            {this.props.comments.length === 0 &&
                <p className="comments__text">Комментариев нет</p>
            }
            </div>
        )
    }
}

export default CommentsComponent;