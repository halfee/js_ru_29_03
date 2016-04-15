import React from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import history from './history'
import IndexPage from './RouteHandlers/IndexPage'
import Articles from './RouteHandlers/Articles'
import ArticlePage from './RouteHandlers/ArticlePage'
import NewArticlePage from './RouteHandlers/NewArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import ArticlesIndex from './RouteHandlers/ArticlesIndex'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history = {history} >
        <Redirect from = "/" to = "/articles" />
        <Route path="/" component = {IndexPage} >
            <Route path = "articles/new" component = {NewArticlePage} />
            <Route path = "articles" component = {Articles} >
                <IndexRoute component = {ArticlesIndex} />
                <Route path = "/new" component = {NewArticlePage} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
            <Route path = "comments" component = {CommentsRoot} >
                <IndexRedirect to = "1" />
                <Route path = ":page" component = {CommentsPage} />
            </Route>
        </Route>
        <Route path = "*" component = {NotFound} />
    </Router>
)