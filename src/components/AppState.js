import React, { createContext, useState } from "react";

// Create a context for the app state
const AppContext = createContext();

// Define the AppState component
const AppState = (props) => {
  // Initialize the game state and turn using useState hooks
  const [state, setState] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);

  // Handle clicking on a cell
  const handleClick = (index) => {
    if (!state[index]) {
      const newState = [...state];
      newState[index] = isTurn ? "X" : "O";
      setState(newState);
      setIsTurn((prev) => !prev);
    }
  };

  // Function to check if there's a winner
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

    // Check if the board is full
    if (state.every((cell) => cell !== null)) {
      return "No one"; // Return 'No one' if the board is full and no winner
    }

    return null; // Return null if there's no winner yet
  };

  // Determine if there's a winner
  const isWinner = CheckWinner();

  // Function to reset the game state when playing again
  const playAgain = () => {
    setState(Array(9).fill(null));
  };

  // Define the context value to be passed down
  const contextValue = { state, handleClick, isWinner, playAgain };
  
  // Provide the context value to children components
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

// Export the components and context
export default AppState;
export { AppContext };
