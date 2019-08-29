import React from 'react';
import Board from './board';
import * as Minesweeper from './minesweeper.js';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Minesweeper.Board(12, 10)
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        const bomb = '\u{1F4A3}'
        return (
            <div className="content">
                <h1>Minesweeper {bomb}</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
        )
    }
}