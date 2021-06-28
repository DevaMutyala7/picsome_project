import React, { lazy, Suspense } from 'react'
import ProtectedRoute from './Components/ProtectedRoute'
import {AuthProvider} from '../src/Context/AuthContext.js'
import './App.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

let Signup =lazy(()=> import('./Components/Signup')) 
let Login =lazy(()=> import('./Components/Login'))
let Dashboard =lazy(()=> import('./Components/Dashboard')) 
let Cart =lazy(()=> import('./Components/Pages/Cart'))

function App() {
  return (
        <Router>
              <Suspense fallback={<h1>Loading....</h1>}>
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
              </Suspense>
        </Router>
  );
}

export default App;
