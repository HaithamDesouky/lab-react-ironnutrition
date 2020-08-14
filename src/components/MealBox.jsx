import React, { Component } from 'react';
import './MealBox.scss';


export class MealBox extends Component {
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
          <input className="form-control col-9" type="number" value="1" />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
