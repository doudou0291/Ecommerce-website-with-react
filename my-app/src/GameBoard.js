import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { GameCircles } from "./GameCircles";
import "./Game.css";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";
import { getComputerMove, isDraw, isWinner } from "./Helper";
import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  PLAYER_1,
  PLAYER_2,
  numCircles,
} from "./Constantes";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(0);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setCurrentPlayer(PLAYER_1);
    setGameBoard(Array(16).fill(0));
    setGameState(GAME_STATE_PLAYING);
  };

  const initBoard = () => {
    let circles = [];
    for (let i = 0; i < numCircles; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const suggestMove = () => {
    clickedCircle(getComputerMove(gameBoard));
  };

  const clickedCircle = (id) => {
    if (gameBoard[id] !== 0) return;
    if (gameState !== GAME_STATE_PLAYING) return;
    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }
    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(0);
    }
    setGameBoard((prev) =>
      prev.map((circle, pos) => (pos === id ? currentPlayer : circle))
    );
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  };

  const renderCircle = (id) => {
    return (
      <GameCircles
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onClickedCircle={() => clickedCircle(id)}
      ></GameCircles>
    );
  };

  return (
    <div>
      <GameHeader
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      ></GameHeader>
      <div className="gameBoard">{initBoard()}</div>
      <GameFooter onclick={initGame} suggest={suggestMove} gameState={gameState}></GameFooter>
    </div>
  );
};
export default GameBoard;
