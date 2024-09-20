import React from 'react'
import { useContext } from 'react'
import {  userContext } from './userContext'

export const User = () => {
  const userContextt = useContext(userContext)
  const handleLogin = () => {
  
      userContextt.setUser({
      name: 'evans',
      email: 'e@gmail.com'
      })
    
    
    }
    const handleLogout = ()=>{}
  return (
      <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContextt.user?.name} </div>
          <div>User email is</div>
    </div>
  )
}

