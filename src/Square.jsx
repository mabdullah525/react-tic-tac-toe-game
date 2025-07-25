import React from 'react'

const Square = (props) => {
    return (
        <div className='box' onClick={props.onClick}>
            <p className='text'>{props.value}</p>

        </div>
    )
}

export default Square