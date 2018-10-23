import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import clubs from './components/clubs.json';
import Title from './components/Title';

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
      <Title/>
      <div className="jumbotron">
        <div className="block">
          <h3>Player 1: </h3>
          <h2>{this.state.randomCountry1}</h2>
          <h2 className="team">{this.state.player1}</h2>
        </div>
        <div className="block">
          <h3>Player 2: </h3>
          <h2>{this.state.randomCountry2}</h2>
          <h2 className="team">{this.state.player2}</h2>
        </div>
        <div>
          <button onClick={this.shuffleGame} className="btn btn-info shuffle">Shuffle</button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
