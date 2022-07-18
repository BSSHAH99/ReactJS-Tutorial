// import React, { Component } from 'react'

// export default class Child extends Component {
//     constructor(props) {
//       super(props)
//         console.log(this.props)
//     }
    
//     render() {
//     return (
//       <div>
//         <input ref={this.props.Myref} type='text'></input>
//       </div>
//     )
//   }
// }

import React from 'react'
const Child = React.forwardRef((props, ref)=> {
 
  return (
    <div>
      <input ref={ref} type='text'></input>
    </div>
  )
})

export default Child
