import React, { Component, PropTypes } from 'react'
import Articles from "./Articles"
import { Provider } from 'react-redux'
import DevTools from './DevTools'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Articles />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root