import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';


class App extends React.Component {
  state = {
    cocktails: data,
    beenClicked: [],
    score: 0
  }

  displayCocktails = () => {
    return this.state.cocktails.map(cocktail => <img className="CocktailImage" value={cocktail.name} src={cocktail.url} onClick={this.handleClick}></img>);
  }

  handleClick = (event) => {
    console.log("Cocktail has been clicked.");
    var cocktail = event.currentTarget.getAttribute("value");
    console.log(cocktail);
    if (this.state.beenClicked.includes(cocktail)) {
      console.log(`You lose! ${cocktail} has already been clicked`);
      alert(`You lose! ${cocktail} has already been clicked`);
      this.setState({
        beenClicked: [],
        score: 0
      });
    } else {
      this.setState({
        beenClicked: this.state.beenClicked.concat(cocktail),
        score: this.state.score + 1
      }, () => {
        if(this.state.cocktails.length === this.state.beenClicked.length) {
        alert("You win and you're drunk! Don't forget to tip your bartender and Uber home");
        this.setState({
          beenClicked: [],
          score: 0
        });
      }
    }
    );
    }
    this.shakeCocktails();
  }

shakeCocktails = () => {
  this.state.cocktails.sort(() => .5 - Math.random());
}

render(){
  return (
    <div className="App">
      <h1>Cocktail Clicky Game!</h1>
      <h3>Score: {this.state.score}</h3>
      {this.displayCocktails()}
    </div>
  );
}
}

export default App;
