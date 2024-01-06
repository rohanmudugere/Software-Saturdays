import React from 'react'

class HelloV2 extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloV2