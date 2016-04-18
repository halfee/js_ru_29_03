import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, LOAD_COMMENTS_FOR_ARTICLE } from '../constants'
import AppDispatcher from '../dispatcher'
import { asyncAC } from './utils'
import { loadForPage, loadForArticle } from './api/comments'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now()
        }
    })
}

export const loadCommentsForPage = asyncAC(loadForPage, LOAD_COMMENTS_FOR_PAGE)
export const loadCommentsForArticle = asyncAC(loadForArticle, LOAD_COMMENTS_FOR_ARTICLE)