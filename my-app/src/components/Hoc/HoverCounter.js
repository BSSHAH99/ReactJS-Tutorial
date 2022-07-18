import React from 'react'
import WithCounter from './WithCounter';

function HoverCounter(props) {
    
  return (

    <div>
      <h2 onMouseOver={props.incrementCount}>Hover {props.count} Times</h2>
    </div>
  )
}

export default WithCounter(HoverCounter);
