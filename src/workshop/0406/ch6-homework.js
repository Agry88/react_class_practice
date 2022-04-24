import React, { Component } from 'react'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: [
                {
                    id: 1,
                    thing: "go wash",
                    done: false,
                },
                {
                    id: 2,
                    thing: "go Walking",
                    done: true
                },
                {
                    id: 3,
                    thing: "go hiking",
                    done: false
                },
                {
                    id: 4,
                    thing: "go biking",
                    done: false
                },
            ]
        }
    }

    change = (id) => {
        var Todocopy = [...this.state.Todo];
        console.log("id:",id);
        Todocopy.forEach(element => {
            if (element.id == id) {
                Todocopy[id-1].done ? Todocopy[id-1].done = false : Todocopy[id-1].done = true;
            }
        });
        console.log(Todocopy);
        this.setState({ Todo: Todocopy });
    }

    render() {
        var Todo_done = this.state.Todo.filter((todo) => todo.done == true)
        var Todo_notdone = this.state.Todo.filter((todo) => todo.done == false)
        return (
            <div>
                <Todo_done_list things={Todo_done} onClick={this.change} />
                <Todo_notdone_list things={Todo_notdone} onClick={this.change} />
            </div>
        );
    }
}

// 完成清單
class Todo_done_list extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>完成事項</h1>
                {this.props.things.map((thing) => (
                    <Todo_done_item key={thing.id} thing={thing} onClick={this.props.onClick} />
                ))}
            </div>
        );
    }
}

class Todo_done_item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href="#" onClick={() => this.props.onClick(this.props.thing.id)}>
                    {this.props.thing.thing}
                </a>
            </div>
        );
    }
}

//未完成清單

class Todo_notdone_list extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>未完成事項</h1>
                {this.props.things.map((thing) => (
                    <Todo_notdone_item key={thing.id} thing={thing} onClick={this.props.onClick} />
                ))}
            </div>
        );
    }
}

class Todo_notdone_item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href="#" onClick={() => this.props.onClick(this.props.thing.id)}>
                    {this.props.thing.thing}
                </a>
            </div>
        );
    }
}

function App() {
    return ( <TodoList /> );
}

export { App };