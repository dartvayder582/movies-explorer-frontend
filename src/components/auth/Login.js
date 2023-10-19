import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ApiErrorMessage from '../ApiErrorMessage/ApiErrorMessage';
import './auth.css';

const Login = ({ isLoad, onLogin }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    onLogin(formValue.email, formValue.password)
  }

  return (
    <div className="authentication content">
      <Logo />
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Рады видеть!</h2>
        <fieldset className="form__fieldset">
          <label htmlFor="email" className="form__label">E-mail</label>
          <input
            className="form__input"
            required
            id="email"
            name="email"
            type="email"
            value={formValue.email}
            onChange={handleChange} />
          <span className="form__error"></span>
          <label htmlFor="password" className="form__label">Пароль</label>
          <input
            className="form__input"
            required
            id="password"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange} />
          <span className="form__error"></span>
        </fieldset>
        <ApiErrorMessage />
        <button
          type="submit"
          className="form__submit-button"
          aria-label="Войти"
          disabled={isLoad} >
          {!isLoad ? "Войти" : "Вход..."}
        </button>
      </form>
      <p className="authentication__footer">Ещё не зарегистрированы? {<Link to="/signup" className="link-style">Регистрация</Link>}</p>

    </div>
  )
}

export default Login;