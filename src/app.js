import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store'

window.store = store

render(<Root store = {store} />, document.getElementById('container'))

/*
function wrappedIncrement() {
    store.dispatch(increment())
}

function renderCounter() {
    render(<Counter count = {store.getState().counter} increment = {wrappedIncrement} />, document.getElementById('container'))
}

renderCounter()

store.subscribe(renderCounter)
*/
