import React from 'react'

function Person({person}) {
  return (
    <div>
        <div className="container my-3">
    <div className="container">
      I Am {person.name},My Age Is {person.age}
    </div>
    </div>
    </div>
  )
}

export default Person
