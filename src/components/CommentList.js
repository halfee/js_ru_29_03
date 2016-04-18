import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'
import { loadCommentsForArticle } from '../AC/comments'

class CommentList extends Component {
    state = {
        commentText: ''
    };

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        const { article, isOpen, ignoreLoading } = nextProps
        if (ignoreLoading) return
        if (isOpen && !this.props.isOpen) loadCommentsForArticle({articleId: article.id})
    }

    getLink() {
        const text = this.props.isOpen ? 'close comments' : 'open comments';
        return <a href="#" onClick = {this.props.toggleOpen}>{text}</a>
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null

        // комменты еще не получены из  api, что делать?
        const comments = article.getRelation('comments')
        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>
            {commentItems}
            <li>{this.getCommentInput()}</li>
        </ul>
    }

    getCommentInput() {
        return <form onSubmit={this.addComment}>
            <label>new comment: </label>
            <input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
        </form>
    }

    addComment = (ev) => {
        ev.preventDefault()
        addComment(this.state.commentText, this.props.article.id)
        this.setState({
            commentText: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)