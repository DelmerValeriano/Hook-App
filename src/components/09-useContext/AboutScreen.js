import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
  
 const {user,setUser} = useContext(UserContext);

 const hadleClick=()=>{
   setUser({});
 }

  return (
    <div>
        <h1>AboutScreen</h1>
        <hr/>
        <pre>
          {JSON.stringify(user,null,3)}
        </pre>

        <button
          className="btn btn-primary"
          onClick={hadleClick}
        >

          Logout
        </button>
    </div>
  )
}
