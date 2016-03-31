import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        return (
            <div>
                <ul>
                    { this.getCommentList() }
                </ul>
            </div>
        );
    };
    
    getCommentList(){
        return this.props.comments.map((comment) =>
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        );
    }
}

export default CommentList;