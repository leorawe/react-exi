import React from 'react'

const Table = (props) => {
  //console.log(props.description)
  //if description, company, other info exists, then print them
  //is ternary: props.description!=''? do x: do y;
  let des = props.description.length > 0 && <p>{props.description}</p>
  let time = new Date(props.time)
  let year = time.getFullYear();
  let coname = props.coname.length > 0 && <p>Company Name: {props.coname}</p>
  let sector = props.sector.length > 0 && <p>Sector: {props.sector}</p>
  let industry = props.industry.length > 0 && <p>Industry: {props.industry}</p>
  return (
    <div>
        <p>Price: {props.price}</p>
        <p>Symbol: {props.symbol}</p>
        <p>Size: {props.size}</p>
        <p>When: {year}-{time.getMonth()+1}-{time.getDate()} {time.getHours()}:{time.getMinutes()}  </p>
        {coname}
        {des}
        {sector}
        {industry}
    </div>
  )
}

export default Table