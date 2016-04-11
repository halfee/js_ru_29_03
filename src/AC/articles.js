import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE } from '../constants'
import { loadAll, loadArticleById } from './api/articles'
import { asyncAC } from './utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES)

export default function loadArticle (id) {
    asyncAC(() => loadArticleById(id), LOAD_ARTICLE)()
}