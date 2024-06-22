import React from 'react'
import { GAME_STATE_DRAW, GAME_STATE_PLAYING,GAME_STATE_WIN } from "./Constantes";


const renderLabel=(gameState,currentPlayer,winPlayer)=>{
  switch(gameState){
    case GAME_STATE_PLAYING:
      return <div>player {currentPlayer} turn</div>   
    case GAME_STATE_WIN:
      return <div>player {winPlayer} wins</div>
    case GAME_STATE_DRAW:
      return <div>game is draw</div>
    default:
  }
}
const GameHeader = ({gameState,currentPlayer,winPlayer}) => {
  return (
    <div className='panel header'>
        <div className="headerText">{renderLabel(gameState,currentPlayer,winPlayer)} </div>
    </div>
  )
}

export default GameHeader
