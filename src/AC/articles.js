import AppDispatcher from '../dispatcher'
<<<<<<< HEAD
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE } from '../constants'
import { loadAll, loadArticleById } from './api/articles'
=======
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID } from '../constants'
import { loadAll, loadById } from './api/articles'
>>>>>>> romabelka/master
import { asyncAC } from './utils'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES)
<<<<<<< HEAD

export default function loadArticle (id) {
    asyncAC(() => loadArticleById(id), LOAD_ARTICLE)()
}
=======
export const loadArticleById = asyncAC(loadById, LOAD_ARTICLE_BY_ID)
>>>>>>> romabelka/master
