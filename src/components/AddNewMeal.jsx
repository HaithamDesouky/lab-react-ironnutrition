import React, { Component } from 'react';

function AddNewMeal(props) {
  if (props.show) {
    return (
      <div>
        <div className="form-container">
          <h1>Fill the form to add a new meal!</h1>
          <form onSubmit={props.submit}>
            <label htmlFor="Name">Food Name:</label>

            <input
              type="text"
              placeholder="Type the name here"
              id="name"
              name="name"
              required
            />
            <label htmlFor="calories">Calories:</label>
            <input
              type="text"
              placeholder="Enter the amount of calories"
              id="calories"
              name="calories"
              required
            />
            <button>Add Meal</button>
          </form>
        </div>
      </div>
    );
  } else {
    return '';
  }
}

export default AddNewMeal;
