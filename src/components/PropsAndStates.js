import React, { useState } from "react"
import './PropsAndStates.css'

// component runs top to bottom 
export const PropsAndState = ({ yourName, day }) => {
  let [countClicks, setCountClicks] = useState(0);
  let [colorIndex, setColorIndex ] = useState(0);
  // countClicks and setCountClicks are properties of useState , useState set to 0 by default

  const allColors = ['red', 'blue', 'orange'];

  const handleClick = () => {
    const newCountClicks = ++countClicks
    // ++ means get the number then add 1 to it
    setCountClicks(newCountClicks);
    
    let newColorIndex = ++colorIndex;
    if (newColorIndex > allColors.length -1){
        newColorIndex = 0;
    }
    setColorIndex(newColorIndex);
  }

  return (
    <>
      <h3>Welcome, {yourName}</h3>
      <p>Today is {day}</p>
      <p className={allColors[colorIndex]}>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}