import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    render() {
        const text = this.props.comment.text;
        return(
            <div>
                { text }
            </div>
        );
    }
}

export default Comment;