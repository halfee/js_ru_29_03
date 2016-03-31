import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false,
        showComments: false
    };

    render() {
        const title = this.props.article.title;

        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                { this.state.isOpen && this.renderBody() }
            </div>
        )
    }

    renderBody() {
        const text = this.props.article.text;

        return (
            <section>
                {text}
                {this.renderComments()}
            </section>
        )
    }

    renderComments() {
        if (this.props.article.comments == null)
            return;

        const linkText = this.state.showComments ? "Скрыть комментарии" : "Показать комментарии";
        return(
            <div>
                <a href="#" onClick={this.handleCommentClick}>
                    {linkText}
                </a>
                { this.state.showComments && <CommentList comments={this.props.article.comments} /> }
            </div>
        );
    }

    handleCommentClick = () => {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article