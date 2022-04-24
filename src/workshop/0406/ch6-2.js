import React, { Component } from 'react';

class ch6_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            time: 10,
            timeout: false
        }
    }

    componentDidMount() {
        this.toc = setInterval(() => {
            if (this.state.time > 0) {
                this.tick();
            } else{
                this.setState({ timeout: true });
                clearInterval(this.toc);
            }
            console.log("123");
        }, 1000);
    }


    tick = () => {
        var a = this.state.time - 1;
        this.setState({ time: a });
    }

    plus = () => {
        var c = this.state.counter + 1;
        this.setState({ counter: c });
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toJSON()}</h1>
                <h1>{this.state.time}</h1>
                <h2>{this.state.counter}</h2>
                {this.state.timeout ? <div>以超時</div> : <button onClick={this.plus}>123</button> }
            </div>
        );
    }
}

export { ch6_2 };