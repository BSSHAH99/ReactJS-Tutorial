import React from 'react'
import CompB from './CompB'

function CompA() {
  console.log('********** Component A Render **********')
  return (
    <div>
      <CompB/>
    </div>
  )
}

export default CompA
