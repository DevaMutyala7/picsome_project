import React from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import Cart from './Components/Pages/Cart'
import {AuthProvider} from '../src/Context/AuthContext.js'
import './App.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
        <Router>
              <AuthProvider>
                  <div className="main">
                        <Switch>
                              <ProtectedRoute exact path="/" component={Dashboard} />
                              <ProtectedRoute path="/cart" component={Cart} />
                              <Route path="/signup"  component = {Signup}/>
                              <Route path="/login" component={Login} />
                        </Switch>
                  </div>
            </AuthProvider>
        </Router>
  );
}

export default App;
