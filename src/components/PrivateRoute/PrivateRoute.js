import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  renderMethod = (routeProps) => {
    const {isAuthorized, component:RouteComponent} = this.props
    if(isAuthorized) {
      return <RouteComponent {...routeProps} />
    } else {
      return <Redirect to='/' />
    }
  }
  render() {
    const { component, ...rest} = this.props;
    return <Route render={this.renderMethod} { ...rest } />
  }
}

export default withAuth(PrivateRoute);
