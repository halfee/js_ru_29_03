import { DELETE_ARTICLE } from '../constants'
import {articles as defaultArticles} from '../fixtures'

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter((a) => { return a.id !== data });
    }

    return articles
}