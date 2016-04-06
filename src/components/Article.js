import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {

    render() {
        const { article: { title }, isSelected, openItem, deleteArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList comments = {article.getRelation('comments')} ref = "commentList" />
            </section>
        )
    }
<<<<<<< HEAD

    handleClick = (ev) => {
        this.props.onOpen(this.props.article.id);
    }
=======
>>>>>>> romabelka/master
}

export default Article