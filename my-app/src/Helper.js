import React from "react";

export const isWinner = (gameBoard, currentMove, currentPlayer) => {
  let Board = [...gameBoard];
  Board[currentMove] = currentPlayer;
  const winLines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];
  for (let i = 0; i < winLines.length; i++) {
    const [c1, c2, c3, c4] = winLines[i];
    if (
      Board[c1] > 0 &&
      Board[c1] === Board[c2] &&
      Board[c1] === Board[c3] &&
      Board[c3] === Board[c4]
    ) {
      return true;
    }
  }
  return false;
};
export const isDraw = (gameBoard, currentMove, currentPlayer) => {
  let Board = [...gameBoard];
  Board[currentMove] = currentPlayer;
  let count = Board.reduce((n, x) => n + (x === 0), 0);
  return count === 0;
};

const getRandomComputerMove = (gameBoard) => {
  let validMoves = [];
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === 0) {
      validMoves.push(i);
    }
  }
  let randomMove = Math.floor(Math.random() * validMoves.length);
  return validMoves[randomMove];
};
const getPosition = (gameBoard, checks) => {
  for (let c = 0; c < checks.length; c++) {
    for (let i = 0; i < checks[c].max; i += checks[c].step) {
      let series =
        gameBoard[i + checks[c].indexs[0]].toString() +
        gameBoard[i + checks[c].indexs[1]].toString() +
        gameBoard[i + checks[c].indexs[2]].toString() +
        gameBoard[i + checks[c].indexs[3]].toString();
      switch (series) {
        case "1110":
        case "2220":
          return i + checks[c].indexs[3];
        case "1101":
        case "2202":
          return i + checks[c].indexs[2];
        case "1011":
        case "2022":
          return i + checks[c].indexs[1];
        case "0111":
        case "0222":
          return i + checks[c].indexs[0];
        default:
          return -1
        }
      }
    }
};

export const getComputerMove = (gameBoard) => {
  let moveChecks = [
    {
      indexs: [0, 1, 2, 3],
      step: 1,
      max: 4,
    },
    {
      indexs: [0, 4, 8, 12],
      step: 4,
      max: 16,
    },
    {
      indexs: [0, 5, 10, 15],
      step: 16,
      max: 16,
    },
    {
      indexs: [3, 6, 9, 12],
      step: 16,
      max: 16,
    },
  ];
  let position = getPosition(gameBoard, moveChecks);
  if (position === -1) return getRandomComputerMove(gameBoard);
  return position;
};
