import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value: null,
//     //     }
//     // }
//     render() {
//       return (
//         // <button className="square" onClick={function(){
//         <button 
//             className="square" 
//             onClick={()=>this.props.onClick()
//         }>
//           {this.props.value}
//         </button>
//       );
//     }
//   }

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
  
  class Board extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
              squares: Array(9).fill(null),
          }
      }
    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick = {() => this.handleClick(i)}
        />
      )
      
    }

    /*修改数据的方法：
        直接修改数据
        var player = { score: 1, name: 'Jeff'};
        player.score = 2;
        //player 修改后的值为 {score: 2, name: 'Jeff'}

        新数据替换旧数据
        var  player = {score: 1, name: 'Jeff'}；

        var newPlayer = Object.assign({}, player, {score: 2});
        //player的值没有改变，但是newPlayer的值是{score: 2, name: 'Jeff'}

        //使用对象展开语法，就可以写成
        //var newPlay = {...player, score: 2};
    */

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squres: squres});
    }
  
    render() {
      const status = 'Next player: X';
  
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
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );