import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppliedRoute from './components/AppliedRoute'

import Home from './containers/Home'
import Login from './containers/Login'
import Signup from './containers/Signup'
import NotFound from './containers/NotFound'

export default ({childProps}) =>
  <Switch>
    <AppliedRoute exact path="/" component={Home} props={childProps} />
    <AppliedRoute exact path="/login" component={Login} props={childProps}/>
    <AppliedRoute exact path="/signup" component={Signup} props={childProps} />
  
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
    
  </Switch>;