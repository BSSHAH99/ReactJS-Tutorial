// import React, { Component } from 'react'
// export class RefcDemo extends Component {
//     constructor(props) {
//       super(props)
//         this.inputRef = React.createRef();
//     }
//     componentDidMount(){
//         this.inputRef.current.focus();
//         console.log(this.inputRef);
//     }
//     clickHandler = () =>{
//         // alert(this.inputRef.current.value);
//         console.log(this.inputRef.current.value);
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef}></input>
//         <button className="btn btn-primary mx-2" onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }
// export default RefcDemo


import React, {useRef, useEffect} from 'react'
export default function RefcDemo() {
  const inputRef = useRef(null);
  useEffect(()=> {
      console.log(inputRef.current.value);
      
      // inputRef.current.focus();
  },[])
  const clickHandler = () =>{
            // alert(this.inputRef.current.value);
            console.log(inputRef.current.value);
        }
  return (

    <div>
      <div className="container my-3">
    <div className="container">
           <input type="text" ref={inputRef}></input>
             <button className="btn btn-primary mx-2" onClick={clickHandler}>Click</button>
           </div>
           </div>
           </div>
  )
}

 