// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, {Component} from 'react';
import {Route, Redirect, BrowserRouter, Switch} from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Search} exact />
          <Route path="/show/:id" component={ShowPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
