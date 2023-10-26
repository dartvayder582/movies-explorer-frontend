import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import ErrorMessageApi from '../../ErrorMessageApi/ErrorMessageApi';
import './auth.css';
import '../forms.css';

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
    <div className="content content_full-vh authentication">
      <form className="form form_auth" onSubmit={handleSubmit}>
        <Logo />
        <h2 className="form__heading form__heading_auth">Добро пожаловать!</h2>
        <fieldset className="form__fieldset form__fieldset_auth">
          <label htmlFor="name" className="form__label form__label_auth">Имя</label>
          <input
            className="form__input form__input_auth"
            required
            id="name" name="name"
            type="text"
            value={formValue.name}
            onChange={handleChange} />
          <span className="form__error"></span>
          <label htmlFor="email" className="form__label form__label_auth">E-mail</label>
          <input
            className="form__input form__input_auth"
            required
            id="email"
            name="email"
            type="email"
            value={formValue.email}
            onChange={handleChange} />
          <span className="form__error"></span>
          <label htmlFor="password" className="form__label form__label_auth">Пароль</label>
          <input
            className="form__input form__input_auth form__input_type_error"
            required
            id="password"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange} />
          <span className="form__error form__error_visible">Что-то пошло не так...</span>
        </fieldset>
        <ErrorMessageApi />
        <button
          type="submit"
          className="button-style form__submit-button form__submit-button_auth"
          aria-label="Зарегистрироваться"
          disabled={isLoad} >
          {!isLoad ? "Зарегистрироваться" : "Регистрация..."}
        </button>
      </form>
      <p className="authentication__footer">Уже зарегистрированы? {<Link to="/signin" className="link-style link-style_orange">Войти</Link>}</p>

    </div>
  )
}

export default Register;