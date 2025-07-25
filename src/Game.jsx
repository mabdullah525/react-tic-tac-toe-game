import React, { useState } from 'react'
import Square from './Square.jsx'

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)])
  console.log(num)
  return (
    <div className='container'>
      <div className='row'>
        <Square value={num[0]} />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Game