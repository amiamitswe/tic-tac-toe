import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

    constructor() {
      super();
      this.state = {
        square: Array(9).fill(null),
        xIsNext: true
      }
    }

    handelClick = (i) => {
      const square = [...this.state.square];
      if (this.calculateWinner(square) || square[i]) {
        return;
      }

      square[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        square: square,
        xIsNext: !this.state.xIsNext
      });
    }

    calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    playAgainHandler = () => {
      this.setState({
        square: Array(9).fill(null),
        players: [],
        startGame: false
      })
    }

    renderSquare(i) {
      return (
      <Square 
        value={this.state.square[i]} 
        handelClick={() => this.handelClick(i)}
      />);
    }
  
    render() {
      const winner = this.calculateWinner(this.state.square);
      let status;
      if(winner === 'X') {
        status = 'Winner is '+ this.props.players[0];
      }
      else if(winner === 'O') {
        status = 'Winner is '+ this.props.players[1];
      }
      else {
        status = 'Next player: '+ (this.state.xIsNext ? this.props.players[0] : this.props.players[1]);
      }
      
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {winner 
            ? <div>
                <button onClick={this.playAgainHandler}>Play Again</button>
              </div>
            : null}
        </div>
      );
    }
  }

  export default Board;