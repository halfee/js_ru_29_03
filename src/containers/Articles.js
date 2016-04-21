import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/Article'
import ArticleList from '../components/ArticleList'

class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        deleteArticle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h1>Articles</h1>
                <ArticleList 
                    articles={this.props.articles} 
                    deleteArticle={this.props.deleteArticle} />
            </div>
        )
    }


    deleteArticle(id) {

    }

}

export default connect((state) => {
    const { articles } = state
    return {articles: articles}
}, {
    deleteArticle
})(Articles)