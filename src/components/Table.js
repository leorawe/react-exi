import React from 'react'

const Table = (props) => {
  //console.log(props.description)
  //if description, company, other info exists, then print them
  //is ternary: props.description!=''? do x: do y;
  let des = props.description.length > 0 && <p>{props.description}</p>
  
  return (
    <div>
        <p>Price: {props.price}</p>
        <p>Symbol: {props.symbol}</p>
        <p>Size: {props.size}</p>
        {des}
    </div>
  )
}

export default Table
