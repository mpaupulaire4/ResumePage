import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './routes.css'

// ROUTES
import Home from './Home'

function Routes (props) {
  return (
    <Router>
      <div className="routes-container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
}

export default Routes