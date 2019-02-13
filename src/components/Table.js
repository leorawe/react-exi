import React from 'react'

const Table = (props) => {
  console.log(props.description)
  return (
    <div>
        <p>Price: {props.price}</p>
        <p>Symbol: {props.symbol}</p>
        <p>Size: {props.size}</p>
    </div>
  )
}

export default Table
