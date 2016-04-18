import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, LOADING } from '../constants'
import { loadCommentsForPage, loadCommentsForArticle } from '../AC/comments'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.pagination = {}
        this.articles = {}

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    })
                    break

                case LOAD_COMMENTS_FOR_PAGE + START:
                    this.pagination[data.page] = LOADING
                    break

                case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
                    this.total = response.total
                    this.pagination[data.page] = response.records.map(comment => comment.id)
                    response.records.forEach(this.__add)
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    this.articles[data.articleId] = LOADING
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    this.articles[data.articleId] = response.map(comment => comment.id)
                    response.forEach(this.__add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadForPage = (page) => {
        const pagination = this.pagination[page]
        if (!pagination) loadCommentsForPage({ page })
        if (!pagination || pagination == LOADING) return LOADING
        return pagination.map(this.getById)
    }

    getOrLoadForArticle = (articleId) => {
        const commentIds = this.articles[articleId]
        if (!commentIds) loadCommentsForArticle({ articleId })
        if (!commentIds || commentIds == LOADING) return LOADING
        return commentIds.map(this.getById)
    }
}

export default CommentStore