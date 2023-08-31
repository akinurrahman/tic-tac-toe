import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppState = (props) => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);
  
  const handleClick = (index) => {
    if (!state[index]) {
      const newState = [...state];
      newState[index] = isTurn ? "X" : "O";
      setState(newState);
      setIsTurn((prev) => !prev);
    }
  };

  const CheckWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerLogic.length; i++) {
      const [a, b, c] = winnerLogic[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null; // Return null if no winner
  };

  const isWinner = CheckWinner();

  const playAgain = () => {
    setState(Array(9).fill(null));
  };

  const contextValue = { state, handleClick, isWinner, playAgain };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
export { AppContext };
