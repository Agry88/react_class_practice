import React, { Component } from 'react';
import Ch6_child from "./ch6-child";
class ch6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        }
    };

    plus = () => {
        var a = this.state.counter + 1;
        this.setState({ counter: a });
    }

    render() {
        return (
            <div>
                {this.state.counter}
                <Ch6_child onClick={this.plus}/>
            </div>
        );
    }
}

export default ch6;