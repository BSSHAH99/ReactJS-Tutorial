import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    Increment(){
        // this.state.count = this.state.count + 1;
        this.setState({
            count : this.state.count + 1
        })
        console.log(this.state.count);
    }
    
  render() {
    return (
      <div>
         <div className="container my-3">
    <div className="container">
          <div>Count - {this.state.count}</div>
          <button className="btn btn-primary mx-2" onClick={()=> this.Increment()}>Increment</button>
          </div>
          </div>
        
      </div>
    )
  }
}
