import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  }
  validEmail = 'stu@dent.com';
  validPassword = '123';

  authorize = (email, password) => {
    if(email === this.validEmail && password === this.validPassword) {
      this.setState({ email, isAuthorized: true, authorizeError: '' })
    } else {
      this.setState({ authorizeError: 'введено не верно' })
    }
  }

  logout = () => {
    this.setState({ email: '', isAuthorized: false })
  }

  getProviderValue = () => {
    const {email, isAuthorized, authorizeError } = this.state
    return { email, isAuthorized, authorizeError, authorize: this.authorize, logout: this.logout }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
