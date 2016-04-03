import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleSingleOpen from '../HOC/toggleSingleOpen'

class AricleList extends Component {
    state = {
        selectedArticles: [],
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    isOpen = {this.props.openEntityId == article.id}
                    article = {article}
                    isSelected = {this.state.selectedArticles.includes(article.id)}
                    selectArticle = {this.selectArticle}
                    onOpen = {this.props.onOpen}
                />
            </li>
        )
    }

    selectArticle = (id) => {
        this.setState({
            selectedArticles: this.state.selectedArticles.concat(id)
        })
    }
}

export default toggleSingleOpen(AricleList)