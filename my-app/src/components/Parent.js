import Child from "./Child";

// import React, { Component, createRef } from 'react'
// export default class Parent extends Component {
//     constructor()
//     {
//         super();
//         this.inputRef = createRef();

//     }
//   render() {
//     return (
//       <div>
//           <Child ref={this.inputRef}/>
//         <button className="btn btn-primary my-2" onClick={()=>{this.inputRef.current.focus()}} >Update Child</button>
//       </div>
//     )
//   }
// }

import React, {useRef, useEffect} from 'react'

function Parent() {
  const inputRef = useRef(null);

  useEffect(()=> {
    console.log(inputRef.current.value);
    // inputRef.current.focus();
},[])
  return (
    <div>
      
      <div className="container my-3">
    <div className="container">
       <Child ref={inputRef}/>
       <button className="btn btn-primary my-2" onClick={()=>{inputRef.current.focus()}} >Update Child</button>
       </div>
       </div>
    </div>
  )
}

export default Parent

