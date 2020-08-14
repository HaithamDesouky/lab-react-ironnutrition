import React, { Component } from 'react';
import './MealBox.scss';

export class MealBox extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  createNewQuantity = e => {
    e.preventDefault();
    const data = {
      quantity: this.state.count,
      name: this.props.name,
      totalCalores: Number(this.props.calories) * this.state.count
    };
    this.props.addToToday(data);
    // this.props.createNewQuantity(data);
  };

  render() {
    return (
      <div className="media">
        <img
          src={this.props.img}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.props.name}</h5>
          <small>{this.props.calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            value={this.state.count}
            onClick={this.increment}
          />
          <button
            className="btn btn-primary col-3"
            onClick={this.createNewQuantity}
          >
            +
          </button>
        </form>
      </div>
    );
  }
}

export default MealBox;
