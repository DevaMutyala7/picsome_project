import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../Context/AuthContext'

function ProtectedRoute({component:Component,...rest}) {
    let {currentUser} = useAuth()
    return (
        <Route {...rest} render={props=>{
           return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}>
        </Route>
    )
}

export default ProtectedRoute
