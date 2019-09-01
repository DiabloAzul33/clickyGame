import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';


class App extends React.Component {
  state = {
    cocktails: data,
    beenClicked: []
  }

  displayCocktails = () => {
    return this.state.cocktails.map(cocktail => <img className="CocktailImage" value={cocktail.name} src={cocktail.url} onClick={this.handleClick}></img>);
  }

  handleClick = (event) => {
    console.log("Cocktail has been clicked.");
    var cocktail = event.currentTarget.getAttribute("value");
    console.log(cocktail);
  }

  render(){
  return (
    <div className="App">
      <h1>Cocktail Clicky Game!</h1>
      {this.displayCocktails()}
    </div>
  );
}
}

export default App;
