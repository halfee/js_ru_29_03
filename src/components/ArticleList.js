import React, { Component, PropTypes } from 'react'
import Article from './Article'
<<<<<<< HEAD
import toggleSingleOpen from '../HOC/toggleSingleOpen'
=======
import singleOpen from '../HOC/singleOpen'
>>>>>>> romabelka/master

class AricleList extends Component {
    state = {
        selectedArticles: [],
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        deleteArticle: PropTypes.func.isRequired
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
        const { isOpen, openItem } = this.props
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    isOpen = {this.props.openEntityId == article.id}
                    article = {article}
                    openItem = {openItem(article.id)}
                    isOpen = {isOpen(article.id)}
                    deleteArticle = {this.props.deleteArticle}
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

<<<<<<< HEAD
export default toggleSingleOpen(AricleList)
=======
export default singleOpen(AricleList)
>>>>>>> romabelka/master
