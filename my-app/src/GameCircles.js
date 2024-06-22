import React from 'react'
// import { useState } from "react";
import './Game.css'


export const GameCircles = ({id,className,onClickedCircle}) => {
  return (
    <div className={`gameCircle ${className}`} onClick={()=>onClickedCircle(id)}>
    </div>
  )
}



