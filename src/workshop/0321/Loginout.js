import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div>
                <h1>訪客請登入好ㄇ</h1>
                <button>登入</button>
            </div>
        );
    }
}

class Logout extends Component {
    render() {
        return (
            <div>
                <h1>會員請登出好ㄇ</h1>
                <button>登出</button>
            </div>
        );
    }
}



class Loginout extends Component {
    render() {
        let logstatus = this.props.logstatus
        return (
            <div>
                {logstatus ? <Login /> : <Logout />}
            </div>
        );
    }
}

class Welcome extends Component {
    render() {
        return (
            <Loginout logstatus={true} />
        );
    }
}

export { Welcome };