import React from 'react'
import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, Component}:PrivateProps) => {
  
    if (isLoggedIn) {
        return <Component name='evans'/>
    } else {
        return <Login/>
    }
  
}

