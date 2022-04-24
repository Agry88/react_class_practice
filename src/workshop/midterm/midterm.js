import React, { Component } from 'react';
import "./midterm.css"
function App() {
    return (
        <Todo />
    );
}

export default App;

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: [
                {
                    id: "1",
                    thing: "來去洗澡瞜",
                    done_status: true,
                },
                {
                    id: "2",
                    thing: "來去吃飯瞜",
                    done_status: false,
                },
                {
                    id: "3",
                    thing: "來去上課瞜",
                    done_status: false,
                },
            ]
        }
    }
    Gotclicked = (id) => {
        const clicked = this.state.Todo.filter((todo)=>(todo.id == id));
        const newTodo = this.state.Todo.filter((todo)=>(todo.id != id));
        clicked[0].done_status ? clicked[0].done_status=false : clicked[0].done_status=true
        newTodo.push(clicked[0]);
        this.setState({ Todo:newTodo });
        console.log(this.state.Todo);
    }

    render() {
        const done_thing = this.state.Todo.filter((todo) => todo.done_status == true);
        const not_done_thing = this.state.Todo.filter((todo) => todo.done_status == false);
        return (
            <div className="Todo">
                <Todo_list Thing={done_thing} Gotclicked={this.Gotclicked} status={true}/>
                <Todo_list Thing={not_done_thing} Gotclicked={this.Gotclicked} status={false} />
            </div>
        );
    }
}

function Todo_list(props) {
    const classname = props.status ? "Todo_list Todo_list_done" : "Todo_list Todo_list_notdone"
    const title = props.status ? "已完成事項": "未完成事項"
    return (
        <div className={classname}>
            <h1>{title}</h1>
            {props.Thing.map(thing => (
                <Todo_item key={thing.id} thing={thing} Gotclicked={props.Gotclicked}/>
            ))}
        </div>
    );
}

function Todo_item(props) {
    const btn_title = props.thing.done_status ? "已完成" : "未完成"
    return (
        <div className="Todo_item">
            <button className="btn" onClick={()=>props.Gotclicked(props.thing.id)}>{btn_title}</button>
            <span>{props.thing.thing}</span>
        </div>
    );
}