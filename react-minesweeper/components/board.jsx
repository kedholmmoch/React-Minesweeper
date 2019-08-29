import React from 'react';
import * as Minesweeper from './minesweeper.js';
import Tile from './tile';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.grid = this.props.board.grid;
        this.updateGame = this.props.updateGame;
    }

    render() {
        // const board = this.props.board;
        return ( 
            <div className="board">
                {
                    this.grid.map( (row, idx) => {
                        return <div className="row" key={idx}> 
                            {
                                row.map((tile, idx) => {
                                return <Tile key={idx} 
                                    tile={tile} 
                                    updateGame={this.updateGame} />
                            })}
                        </div>
                    })
                }
            </div>
        )
    }
}