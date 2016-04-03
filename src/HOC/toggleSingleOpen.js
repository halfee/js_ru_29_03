import React, { Component as ReactComponent } from 'react'

export default (Component) => class ToggleSingleOpen extends ReactComponent {
    state = {
        openEntityId: null,
    }

    onOpen = (id) => {
        this.setState({
            openEntityId: id,
        });
    }

    render() {
        return <Component {...this.props}
            openEntityId={this.state.openEntityId}
            onOpen={this.onOpen} />
    }
}