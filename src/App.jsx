import React, { Component } from 'react';
import './App.scss';
import meals from './meals.json';
import MealBox from './components/MealBox.jsx';
import AddNewMeal from './components/AddNewMeal.jsx';
import Search from './components/Search.jsx';

function generateId() {
  return Math.random().toString();
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMeals: meals,
      currentFood: meals,
      showForm: false
    };
  }
  showForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  submitNewFood = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const calories = e.target.calories.value;
    let quantity = 0;

    let newFood = {
      name,
      calories,
      quantity,
      id: generateId()
    };

    let allMealsClone = [newFood, ...this.state.allMeals];
    let currentFood = [newFood, ...this.state.currentFood];

    this.setState({
      allMeals: allMealsClone,
      currentFood,
      showForm: false
    });
  };

  search = query => {
    console.log(query);
    const allMeals = this.state.allMeals;

    let term = query.toLowerCase();

    let filteredFood = allMeals.filter(item =>
      item.name.toLowerCase().includes(term)
    );

    // if (term.length !== 0) {
    //   food =
    //   );
    // } else {
    //   food = [allMeals];
    // }

    console.log(
      allMeals.length,
      filteredFood.length,
      this.state.currentFood.length
    );

    this.setState({
      currentFood: term.length > 0 ? filteredFood : allMeals
    });
  };

  render() {
    return (
      <div>
        <Search query={this.state.query} onType={this.search}></Search>
        <button onClick={this.showForm}>Add a meal!</button>

        <AddNewMeal
          show={this.state.showForm}
          submit={this.submitNewFood}
        ></AddNewMeal>

        {this.state.currentFood.map(f => {
          return (
            <MealBox
              key={generateId()}
              img={f.image}
              name={f.name}
              calories={f.calories}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
