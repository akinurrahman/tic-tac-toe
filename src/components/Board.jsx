import React, { useContext } from "react";
import Box from "./Box";
import { AppContext } from "./AppState";

const Board = () => {
  // Access context values using useContext hook
  const { state, handleClick, isWinner, playAgain } = useContext(AppContext);

  return (
    <div className="board">
      {isWinner !== null ? (
        // Display winner message and play again button if there's a winner
        <>
          <h1 className="winner-message">
            {isWinner && `${isWinner} won the Game`}
          </h1>
          <button className="play-again-button" onClick={playAgain}>
            Play Again
          </button>
        </>
      ) : (
        // Render the game board if no winner yet
        <>
          <div className="board-row">
            <Box onClickProp={() => handleClick(0)} value={state[0]} />
            <Box onClickProp={() => handleClick(1)} value={state[1]} />
            <Box onClickProp={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Box onClickProp={() => handleClick(3)} value={state[3]} />
            <Box onClickProp={() => handleClick(4)} value={state[4]} />
            <Box onClickProp={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Box onClickProp={() => handleClick(6)} value={state[6]} />
            <Box onClickProp={() => handleClick(7)} value={state[7]} />
            <Box onClickProp={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
