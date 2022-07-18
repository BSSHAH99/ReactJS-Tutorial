import React from 'react'

function Memo({name}) {
  console.log('memo Component Render')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo);
