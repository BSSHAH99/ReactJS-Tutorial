import React from 'react'
import { useParams } from "react-router-dom";

function UserDetails() {
    const {userId} = useParams();
    // const userId = params.userId;
  return (
    <div>
      Details About Users {userId}
    </div>
  )
}

export default UserDetails
