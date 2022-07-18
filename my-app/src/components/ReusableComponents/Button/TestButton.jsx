import React from 'react'

function TestButton({ children = "I AM Button", type = "submit", onClick }) {
  return (
    <button type={type} className="btn btn-primary" onClick={onClick}>{children}</button>
  )
}

export default TestButton
