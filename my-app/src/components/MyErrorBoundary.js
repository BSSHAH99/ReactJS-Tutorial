import React, { Component } from 'react'

export default class MyErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null
      }
    }
    static getDerivedStateFromError()
    {
        return {error:true}
    }
  render() {

    
    return (
      <div>
        {
        this.state.error ? <h1>Error boundaries</h1> : this.props.children 
    }

      </div>
    )
  }
}
