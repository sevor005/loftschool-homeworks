import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

  state = {
    firstNameValue: '',
    lastNameValue: '',
    passwordValue: '',
    error: {}
  }

// при отправке

// проверка на ввод данных onBlur
  handleChange = (key, value, errorName) => {
    if(this.state[key] !== value) {
      return this.setState({ error: {...this.state.error, [key]: errorName} });
    } else {
      return this.setState({ error: {...this.state.error, [key]: ''} });
    }
  }

//отправка формы
  handlerSubmit = event => {
    event.preventDefault();
    if(this.state.firstNameValue === 'James' &&
       this.state.lastNameValue === 'Bond' &&
       this.state.passwordValue === '007') {
        window.open('https://google.com')
    }
  }

//onChange
  // handlerChangeName = event => {
  //   this.setState({ firstNameValue: event.target.value })
  // }
  // handlerChangeLastName = event => {
  //   this.setState({ lastNameValue: event.target.value })
  // }
  // handlerChangePassword = event => {
  //   this.setState({ passwordValue: event.target.value })
  // }

// вот эта функция!!
  handlerValue = (event, nameValue) => {
    this.setState({ [nameValue]: event.target.value })
  }

  render() {
    return (
      <div className="app-container">
        <form className="form" onSubmit={ this.handlerSubmit }>
          <h1>Введите свои данные, агент</h1>

          <p className="field">
            <label htmlFor="firstname" className="field__label">
              <span className="field-label">Имя</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-firstname"
              name="firstname"
              value={ this.state.firstNameValue }
              // onChange={ this.handlerChangeName }
              onChange={() => this.handlerValue('event', 'firstNameValue')}
              onBlur={() => this.handleChange('firstNameValue', 'James', 'Имя не подходит!')}
            />
              <span className="field__error field-error t-error-firstname">{ this.state.error.firstNameValue }</span>
          </p>

          <p className="field">
            <label htmlFor="lastname" className="field__label">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-lasttname"
              name="lastname"
              value={ this.state.lastNameValue }
              // onChange={ this.handlerChangeLastName }
              onChange={() => this.handlerValue('event', 'lastNameValue')}
              onBlur={() => this.handleChange('lastNameValue', 'Bond', 'Фамилия не подходит!')}
            />
              <span className="field__error field-error t-error-firstname">{ this.state.error.lastNameValue }</span>
          </p>

          <p className="field">
            <label htmlFor="password" className="field__label">
              <span className="field-label">Пароль</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-password"
              name="password"
              value={ this.state.passwordValue }
              // onChange={ this.handlerChangePassword }
              onChange={() => this.handlerValue('event', 'passwordValue')}
              onBlur={() => this.handleChange('passwordValue', '007', 'Пароль не подходит!')}
            />
              <span className="field__error field-error t-error-firstname">{ this.state.error.passwordValue }</span>
          </p>

          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
              onBlur={ this.checkingNameEntry }
            />
          </div>
        </form>
      </div>
    )
  }
}
