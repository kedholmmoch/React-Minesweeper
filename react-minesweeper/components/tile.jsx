import React from 'react';
import * as Minesweeper from './minesweeper.js';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.bombed = this.props.tile.bombed;
        this.explored = this.props.tile.explored;
        this.flagged = this.props.tile.flagged;
        this.bombCount = this.props.tile.adjacentBombCount();
        this.row = this.props.tile.pos[0];
        this.col = this.props.tile.pos[1];

        ( () => {this.markProps()});
    }

    determineText() {
        const bomb = '\u{1F4A3}';
        const flag = '\u{1F6A9}';
        return this.bombed ? `${bomb}` : `${this.bombCount}`;
            // this.explored ? 
            // (this.bombed ? `${bomb}` : `${this.bombCount}` ):
            // (this.flagged ? `${flag}` : "");
        
    }

    // markProps() {
    //     let row = this.row;
    //     let col = this.col;
    //     let ele = document.querySelector(`[data-row=${row}][data-col=${col}]`);

    //     if (this.bombed) {
    //         ele.classList.add("bombed");
    //     }
    //     if (this.flagged) {
    //         ele.classList.add("flagged");
    //     }
    //     if (this.explored) {
    //         ele.classList.add("explored");
    //     }
    // }

    render() {
        const row = this.row;
        const col = this.col;
        const bombed = this.bombed;
        const flagged = this.flagged;
        const explored = this.explored;

        // let newClass;

        // if (explored) {
        //     if (bombed) {
        //         newClass = "bombed";
        //     } else {
        //         newClass = "explored";
        //     }
        // } else {
        //     if (flagged) {
        //         newClass = "flagged";
        //     } else {
        //         newClass = "unexplored";
        //     }
        // }

        return (
            <div data-row={row} data-col={col} className="tile">{this.determineText()}</div>
        )
    }
}