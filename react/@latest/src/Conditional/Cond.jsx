import React, { useState } from 'react'

const Cond = () => {
    const [loggedIn,setLogin]  = useState(false);
  return (
    <div>
        {!loggedIn?(
            <h1>Please login</h1>
        ):(
            <h1>Welcome user</h1>
        )}
      <button onClick={()=>setLogin(!loggedIn)}>LOGIN </button>
    </div>
  )
}

export default Cond
