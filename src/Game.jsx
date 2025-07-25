import React, { useState } from 'react'
import Square from './Square.jsx'

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)])
  console.log(num)
  const handleClick = (index) => {
    let copyArray = [...num];
    copyArray[index] = "X"
    setNum(copyArray);
    console.log(copyArray);
  }
  return (
    <div className='container'>
      <div className='row'>
        <Square onClick={() => handleClick(0)} value={num[0]} />
        <Square onClick={() => handleClick(1)} value={num[1]} />
        <Square onClick={() => handleClick(2)} value={num[2]} />
      </div>
      <div className='row'>
        <Square onClick={() => handleClick(3)} value={num[3]} />
        <Square onClick={() => handleClick(4)} value={num[4]} />
        <Square onClick={() => handleClick(5)} value={num[5]} />
      </div>
      <div className='row'>
        <Square onClick={() => handleClick(6)} value={num[6]} />
        <Square onClick={() => handleClick(7)} value={num[7]} />
        <Square onClick={() => handleClick(8)} value={num[8]} />
      </div>
    </div>
  )
}

export default Game