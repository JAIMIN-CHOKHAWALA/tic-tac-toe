import React from 'react';
import './Board.css';
import { Cell } from './Cell';

export const Board = (props) => {

    const cells = props.cellValues.map(
        (item, i) => {
            const canHighlight = props.winningCombination &&
                                 props.winningCombination.indexOf(i) >= 0;
            
            return (
                <Cell
                    key={i}
                    value={item}
                    canHighlight={canHighlight}
                    onclick={() => props.cellClicked(i)}
                />
            )
            
        }
    );
    
    return (
        <div id="board">
            
            {cells}
        
        </div>
    );
}

// export default Board;
