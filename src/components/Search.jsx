import React, { Component } from 'react';

function Search(props) {
  return (
    <div>
      <h1>Search for a food item</h1>
      <form className="row align-self-center">
        <input
          className="form-control col-9"
          type="text"
          onChange={event => props.onType(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
