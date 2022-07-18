import React from 'react'
import CompC from './CompC'

function CompB() {
  console.log('Component B Render')
  return (
    <div>
      <CompC/>
    </div>
  )
}

export default CompB
