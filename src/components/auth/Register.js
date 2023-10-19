import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ApiErrorMessage from '../ApiErrorMessage/ApiErrorMessage';
import './auth.css';

const Register = ({ isLoad, onRegister }) => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
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
    onRegister(formValue.name, formValue.email, formValue.password);
  }

  return (
    <div className="authentication content">
      <Logo />
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Добро пожаловать!</h2>
        <fieldset className="form__fieldset">
          <label htmlFor="name" className="form__label">Имя</label>
          <input
            className="form__input"
            required
            id="name" name="name"
            type="text"
            value={formValue.name}
            onChange={handleChange} />
          <span className="form__error"></span>
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
          aria-label="Зарегистрироваться"
          disabled={isLoad} >
          {!isLoad ? "Зарегистрироваться" : "Регистрация..."}
        </button>
      </form>
      <p className="authentication__footer">Уже зарегистрированы? {<Link to="/signin" className="link-style">Войти</Link>}</p>

    </div>
  )
}

export default Register;