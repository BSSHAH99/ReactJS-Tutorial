import React,{useState} from 'react'

const WithCounter = (WrappedComponent)=>{
    function NewComponent(props) {
      const [count,setcount]= useState(0);

      let incrementCount = () =>
      {
          setcount(prevState =>
              {
                  return prevState +1 
              })
      }
        return (
          <div>
            <WrappedComponent count={count} incrementCount={incrementCount}  {...props}/>
          </div>
        )
      }
      return NewComponent
}
export default WithCounter
