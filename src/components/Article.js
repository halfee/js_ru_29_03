import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
<<<<<<< HEAD
import loadArticle from '../AC/articles'
=======
import { loadArticleById } from '../AC/articles'
>>>>>>> romabelka/master

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        selectArticle: PropTypes.func,
        isSelected: PropTypes.bool,
<<<<<<< HEAD
        openItem: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired,
        loading: PropTypes.bool
    }

    componentWillReceiveProps(props)
    {   
        //кроме этого советую проверить && !this.props.isOpen иначе может привести к множественным запросам
        if (props.article.text == null && props.isOpen){
            loadArticle(props.article.id)
        }
=======
        isOpen: PropTypes.bool.isRequired,
        openItem: PropTypes.func,
        deleteArticle: PropTypes.func.isRequired,
        ignoreLoading: PropTypes.bool
    }

    componentWillReceiveProps(nextProps) {
        const { article, isOpen, ignoreLoading } = nextProps
        if (ignoreLoading) return
        if (isOpen && !this.props.isOpen && !article.text) loadArticleById({id: article.id})
>>>>>>> romabelka/master
    }

    render() {
        const { article: { title }, isSelected, openItem, loading } = this.props
        const style = isSelected ? {color: 'red'} : null
        if (loading) return <h1>Loading...</h1>

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
        if (selectArticle) selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        if (article.loading) return <h3>Loading...</h3>
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = "commentList" />
            </section>
        )
    }
}

export default Article
