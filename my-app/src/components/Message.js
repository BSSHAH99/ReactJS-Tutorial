import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Welcom visitor'
        }
    }
    Click(){
        this.setState({
            message :"Thank You Fro Click Me"
        })
    }
  render() {
    return (
      <div>
         <div className="container my-3">
    <div className="container">
        <h1>{this.state.message}</h1>
        <button className="btn btn-primary mx-2" onClick={()=>this.Click()}>Click Me</button>
      </div>
      </div>
      </div>
    )
  }
}


