import React, { useContext } from 'react'
import {UserConsumer, UserContext} from "../Context/UserContext";

function CompC() {
  const UseContext = useContext(UserContext);
  console.log('Component C Render')
  return (
    <div>
      This Is useContext {UseContext}
    <br/>
      This Is UserConsumer
      <UserConsumer>
        {
          (username) => {
            return <div>Hello {username}</div>
          }
        }
      </UserConsumer>
    </div>
  )
}



// class MyClass extends React.Component {
//   static contextType = MyContext;
//   render() {
//     let value = this.context;
//     /* render something based on the value */
//   }
// }




export default CompC
