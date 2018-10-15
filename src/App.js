import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import clubs from './components/clubs.json';

class App extends Component {
  constructor() {
    super();
    this.shuffleGame = this.shuffleGame.bind(this);
    this.state = {
      countryPlayer1: '',
      countryPlayer2: '',
      player1: '',
      player2: ''
    }
  }

  shuffleGame() {
    const teams = Object.values(clubs)
    const randomValue = teams[parseInt(Math.random() * teams.length)]
    const randomTeam = randomValue[parseInt(Math.random() * randomValue.length)]

    const randomValue2 = teams[parseInt(Math.random() * teams.length)]
    const randomTeam2 = randomValue2[parseInt(Math.random() * randomValue2.length)]
    console.log(randomTeam);
    this.setState({
      player1: randomTeam,
      player2: randomTeam2
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.shuffleGame} className="btn btn-info">Shuffle</button>
        <h2>{this.state.randomCountry1}</h2>
        <h1>{this.state.player1}</h1>
        <h2>{this.state.randomCountry2}</h2>
        <h1>{this.state.player2}</h1>
      </div>
    );
  }
}

export default App;
