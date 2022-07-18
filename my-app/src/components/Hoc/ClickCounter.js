import React from 'react'
import WithCounter from './WithCounter';

function ClickCounter(props) {
    
  return (
    <div>
      <button className="btn btn-primary mx-2 my-2" onClick={props.incrementCount}>{props.name}Clicked {props.count} Times</button>
    </div>
  )
}

export default WithCounter(ClickCounter);
