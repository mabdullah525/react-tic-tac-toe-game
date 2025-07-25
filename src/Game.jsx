import React, { useState } from 'react'
import Square from './Square.jsx'

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)])
  console.log(num)
  return (
    <div className='container'>
      <div className='row'>
        <Square value={num[0]} />
        <Square value={num[1]} />
        <Square value={num[2]} />
      </div>
      <div className='row'>
        <Square value={num[3]} />
        <Square value={num[4]} />
        <Square value={num[5]} />
      </div>
      <div className='row'>
        <Square value={num[6]} />
        <Square value={num[7]} />
        <Square value={num[8]} />
      </div>
    </div>
  )
}

export default Game