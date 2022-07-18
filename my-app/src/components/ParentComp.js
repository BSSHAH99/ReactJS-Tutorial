import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'bhavik shah'
      }
    }

    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name: 'bhavik'
            })
        }, 2000)
    }
    
  render() {
      console.log('********** Parent Component Render **********')
    return (
      <div>
          Parent Component
          <Memo name={this.state.name}/>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
