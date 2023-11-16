import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import ApiMessage from '../../ApiMessage/ApiMessage';
import { useValidationForm } from '../../../utils/hooks/useValidationForm';
import './auth.css';
import '../forms.css';

const Register = ({
  isLoad,
  onRegister,
  isShowApiMessage,
  isSuccessApiMessage,
  apiMessageText,
  hideApiMessage,
  regex,
}) => {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useValidationForm({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    handleChange(e);
    hideApiMessage();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <main className="main content content_full-vh auth">
      <form className="form form_auth" onSubmit={handleSubmit} noValidate>
        <Logo />
        <h1 className="form__heading form__heading_auth">Добро пожаловать!</h1>
        <fieldset className="form__fieldset form__fieldset_auth">
          <label htmlFor="name" className="form__label form__label_auth">Имя</label>
          <input
            className={`form__input form__input_auth ${errors.name && 'form__input_type_error'}`}
            required
            placeholder='Ваше имя'
            id="name"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            value={values.name || ''}
            pattern={regex.name}
            onChange={handleInputChange} />
          <span className="form__error">{errors.name}</span>
          <label htmlFor="email" className="form__label form__label_auth">E-mail</label>
          <input
            className={`form__input form__input_auth ${errors.email && 'form__input_type_error'}`}
            required
            placeholder='Ваш E-mail'
            id="email"
            name="email"
            type="email"
            value={values.email || ''}
            pattern={regex.email}
            onChange={handleInputChange} />
          <span className="form__error">{errors.email}</span>
          <label htmlFor="password" className="form__label form__label_auth">Пароль</label>
          <input
            className={`form__input form__input_auth ${errors.password && 'form__input_type_error'}`}
            required
            placeholder='Ваш пароль'
            id="password"
            name="password"
            type="password"
            minLength="5"
            maxLength="25"
            value={values.password || ''}
            onChange={handleInputChange} />
          <span className="form__error">{errors.password}</span>
        </fieldset>
        <ApiMessage
          isShowApiMessage={isShowApiMessage}
          isSuccessApiMessage={isSuccessApiMessage}
          apiMessageText={apiMessageText} />
        <button
          type="submit"
          className={
            `button-style
            button-style_opacity
            form__submit-button
            form__submit-button_auth
            ${!isValid ? 'form__submit-button_disable' : ''}`}
          aria-label="Зарегистрироваться"
          disabled={isLoad || !isValid} >
          {!isLoad ? "Зарегистрироваться" : "Регистрация..."}
        </button>
      </form>
      <p className="auth__footer">Уже зарегистрированы?
        {<Link to="/signin" className="link-style link-style_orange auth__link">Войти</Link>}</p>
    </main>
  )
}

export default Register;