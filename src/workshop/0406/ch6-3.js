import React, { Component } from 'react'
import PropTypes from 'prop-types';
import "./practice.css";
// Menu +10
class ch6_3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Meallist />
            </div>
        );
    }
}
export { ch6_3 };

class Meallist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [
                {
                    id: 1,
                    name: "嫩煎魚排佐鮮蔬",
                    price: 350,
                    url: "https://i.imgur.com/o8cd4Rw.jpg",
                },
                {
                    id: 2,
                    name: "清炒番茄義大利麵",
                    price: 180,
                    url: "https://i.imgur.com/KRboztK.jpg",
                },
                {
                    id: 3,
                    name: "九層塔沙拉",
                    price: 120,
                    url: "https://i.imgur.com/Yg1t5sW.jpg",
                },
                {
                    id: 4,
                    name: "澳洲牛排佐松露醬",
                    price: 450,
                    url: "https://i.imgur.com/uzJbxW5.jpg",
                },
                {
                    id: 5,
                    name: "林佳君佐威靈頓牛排",
                    price: 450,
                    url: "https://i.imgur.com/DQkjuN3.jpeg",
                },
            ],
        }
    }

    plusprice = (id) => {
        var mealscopy = this.state.meals;
        var plusedid = this.state.meals[id-1];
        var plusedprice = this.state.meals[id-1].price + 10;
        mealscopy.forEach(element => {
            if (element.id == plusedid.id) {
                element.price = plusedprice
            }
        });
        this.setState({ meals : mealscopy });
    }

    render() {
        return (
            <div className='meal-list'>
                {this.state.meals.map(function (meal){
                    return(
                        <Meal 
                            key = {meal.id}
                            id = {meal.id}
                            name = {meal.name}
                            price = {meal.price}
                            url = {meal.url}
                            onClick = {this.plusprice}
                        />
                    )
                })}
            </div>
        );
    }
}


class Meal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span className="meal-item">
                <div className="meal-item-photo-wrap">
                    <img src={this.props.url} alt="meal" className="meal-item-photo" />
                </div>
                <span className="meal-item-title">{this.props.name}</span>
                <span className="meal-item-price">{this.props.price}</span>
                <button onClick={() => this.props.onClick(this.props.id)}>Click me to +10</button>
            </span>
        );
    }
}


