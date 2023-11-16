import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import ApiMessage from '../../ApiMessage/ApiMessage';
import { useValidationForm } from '../../../utils/hooks/useValidationForm';
import './auth.css';
import '../forms.css';

const Login = ({
  isLoad,
  onLogin,
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
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    handleChange(e);
    hideApiMessage();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values.email, values.password)
  }

  return (
    <main className="main content content_full-vh auth">
      <form className="form form_auth" onSubmit={handleSubmit} noValidate>
        <Logo />
        <h1 className="form__heading form__heading_auth">Рады видеть!</h1>
        <fieldset className="form__fieldset form__fieldset_auth">
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
            form__submit-button
            form__submit-button_auth
            ${!isValid ? 'form__submit-button_disable' : 'button-style_opacity'}`}
          aria-label="Войти"
          disabled={isLoad || !isValid} >
          {!isLoad ? "Войти" : "Вход..."}
        </button>
      </form>
      <p className="auth__footer">Ещё не зарегистрированы?
        {<Link to="/signup" className="link-style link-style_orange auth__link">Регистрация</Link>}</p>
    </main>
  )
}

export default Login;