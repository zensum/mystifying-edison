import React from 'react'

//
// See API here of what info a user contains: https://jsonplaceholder.typicode.com/
//

export const User = ({user}) => {
  console.log("This is what this user looks like", user);
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}
