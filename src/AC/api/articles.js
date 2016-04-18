import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}

export function loadById(data) {
    return $.get('/api/article/' + data.id)
}