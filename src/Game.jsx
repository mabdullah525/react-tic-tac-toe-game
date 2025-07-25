import React from 'react'
import Square from './Square.jsx'

const Game = () => {
  return (
    <div className='container'>
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
      <div className='row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Game