import { useEffect, useState } from "react";
import Block from "./Block";
import "./TicTacToe.css";

const TicTacToe: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];

      if (state[a] !== null && state[b] !== null && state[c] !== null) {
        if (state[a] == state[b] && state[a] == state[c]) {
          alert(`${currentTurn} won`);
          setState(Array(9).fill(null));
        }
      }
    }
  };

  useEffect(() => {
    checkWinner();
    setCurrentTurn((currentTurn) => (currentTurn === "X" ? "O" : "X"));
  }, [state]);

  const handleBlockClick = (index: number) => {
    if (state[index] !== null) return;

    setState((prevState) => {
      prevState[index] = currentTurn;
      return [...prevState];
    });
  };

  console.log("State", state);
  return (
    <>
      <div className="board">
        <div className="row">
          {[0, 1, 2].map((item) => {
            return (
              <Block
                value={state[item]}
                onClick={() => handleBlockClick(item)}
                key={item}
              />
            );
          })}
        </div>
        <div className="row">
          {[3, 4, 5].map((item) => {
            return (
              <Block
                value={state[item]}
                onClick={() => handleBlockClick(item)}
                key={item}
              />
            );
          })}
        </div>
        <div className="row">
          {[6, 7, 8].map((item) => {
            return (
              <Block
                value={state[item]}
                onClick={() => handleBlockClick(item)}
                key={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
