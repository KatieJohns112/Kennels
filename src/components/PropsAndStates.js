import React, { useState } from "react"

// component runs top to bottom 
export const PropsAndState = ({ yourName, day }) => {
  let [countClicks, setCountClicks] = useState(0)
// countClicks and setCountClicks are properties of useState , useState set to 0 by default
  const handleClick = () => {
    const newCountClicks = ++countClicks
    // ++ means get the number then add 1 to it
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName}</h3>
      <p>Today is {day}</p>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
    </>
  )
}