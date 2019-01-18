// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import {withAuth} from '../../context/Auth';
import style from './LoginForm.module.css';

class LoginForm extends PureComponent {
  state = {
    email: '',
    password: ''
  }
  handleEnter = () => {
    const {authorize} = this.props;
    const {email, password} = this.state;
    authorize(email, password)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  renderForm = () => {
    const {email, password} = this.state;
    const {authError} = this.props;

    return <div className={style.bg}>
        <div className={style.form}>
          <p>
            <label htmlFor={style.labelText}>
              <span className={style.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name='email'
              className={style.input}
              value={email}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor={style.labelText}>
              <span className={style.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name='password'
              className={style.input}
              onChange={this.handleChange}
              value={password}
            />
          </p>

          {authError === '' || <p className={style.error}>{authError}</p>}

          <div className={style.buttons}>
            <button className={style.button} onClick={this.handleEnter}>Войти</button>
          </div>
        </div>
      </div>
  }

  render() {
    const {isAuthorized} = this.props
    return isAuthorized ? <Redirect to='/app'/> : this.renderForm()
  }
}

export default withAuth(LoginForm);
