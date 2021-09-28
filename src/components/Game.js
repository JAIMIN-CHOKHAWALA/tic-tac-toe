import React, { useState } from 'react';
import './Game.css';
import { Board } from './Board';
import { ResultModal } from './ResultModal';

// core-game-functionality;
import { calculateWinner } from '../utils/winnerCalculator';

const Game = () => {
    /* CREATING GAME-STORE or STATE */
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xTurn, setXTurn] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfTurnsLeft, setnumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [winningCombination, setWinningCombination] = useState([]);
    
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';
    
    
    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            const updatedCellValues = [...cellValues];
            updatedCellValues[cellIndex] = xTurn ? 'X' : 'O';
            
            // Calculate the result : setIsGameOver(true);
            const updateNumberOfTurnsLeft = numberOfTurnsLeft - 1;
            setnumberOfTurnsLeft(updateNumberOfTurnsLeft);
            const calcResult = calculateWinner(updatedCellValues, updateNumberOfTurnsLeft, cellIndex);
            
            setCellValues(updatedCellValues);
            setXTurn(!xTurn);
            setIsGameOver(calcResult.hasResult);
            setWinner(calcResult.winner);
            setWinningCombination(calcResult.winningCombination);
        }
    }
    
    const playAgain = () => {
        setCellValues(['', '', '', '', '', '', '', '', '']);
        setXTurn(true);
        setIsGameOver(false);
        setnumberOfTurnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);
    }

    return (
      <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        
        <Board
            cellValues={cellValues}
            winningCombination={winningCombination}
            cellClicked={onCellClicked}
        />

     </div>
     
     <ResultModal
        isGameOver={isGameOver}
        winner={winner}
        onPlayAgain={playAgain}
     />
     
     </>
    );
}


export default Game;
