import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Feed from '../pages/Feed'
import ListUsers from '../pages/ListUsers'

function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Feed} />
        <Route path='/users' component={ListUsers} />
        <Route path='/profile' component={Feed} />
      </Switch>
    </BrowserRouter>
  )
}

export default PrivateRoutes