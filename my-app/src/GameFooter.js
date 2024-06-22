import React from 'react'
import { GAME_STATE_PLAYING } from './Constantes'


const GameFooter = ({onclick,suggest,gameState}) => {

  return (
    <div className='panel footer'>
      {
        gameState === GAME_STATE_PLAYING &&
        <button onClick={suggest}>Suggest</button>
      }
      {
        gameState !== GAME_STATE_PLAYING &&
        <button onClick={onclick}>new Game</button>
      }
    </div>
  )
}

export default GameFooter