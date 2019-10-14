import React, {Component} from 'react';
import Players from './PlayerName';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      startGame: false
    }
  }

  player1 = (e) => {
    const p1 = [...this.state.players];
    p1[0] = e.target.value;
    this.setState({players: p1});
    console.log(this.state.players);
  }


  player2 = (e) => {
    const p1 = [...this.state.players];
    p1[1] = e.target.value;
    this.setState({players: p1});
    console.log(this.state.players);
  }


  startGameNow = () => {
    this.setState({startGame: !this.state.startGame});
  }

  
    render() {
      return (
        <div className="game">
          {this.state.startGame === false
          ? <Players 
            players = {this.state.players}
            player1 = {this.player1}
            player2 =  {this.player2}
            startGameNow = {this.startGameNow}
          />
          : <div>
              <div className="game-board">
                <Board
                  players={this.state.players}
                />
              </div>
              <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
              </div> 
            </div> 
        }
        </div>
      );
    }
  }

  export default Game;