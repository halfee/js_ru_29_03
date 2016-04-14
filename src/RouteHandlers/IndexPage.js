import React, { Component, PropTypes } from 'react'

class IndexPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>News Application!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default IndexPage