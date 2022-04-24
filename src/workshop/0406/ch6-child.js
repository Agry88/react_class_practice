import React, { Component } from 'react'
class Ch6_child extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.onClick}>Clcik me</button>
        );
    }
}
 
export default Ch6_child;