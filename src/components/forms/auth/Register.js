import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import ErrorMessageApi from '../../ErrorMessageApi/ErrorMessageApi';
import './auth.css';
import '../forms.css';

const Register = ({
  isLoad,
  onRegister,
  isShowApiError,
}) => {
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
    <main className="main content content_full-vh auth">
      <form className="form form_auth" onSubmit={handleSubmit}>
        <Logo />
        <h1 className="form__heading form__heading_auth">Добро пожаловать!</h1>
        <fieldset className="form__fieldset form__fieldset_auth">
          <label htmlFor="name" className="form__label form__label_auth">Имя</label>
          <input
            className="form__input form__input_auth"
            required
            placeholder='Ваше имя'
            id="name"
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            value={formValue.name}
            onChange={handleChange} />
          <span className="form__error"></span>
          <label htmlFor="email" className="form__label form__label_auth">E-mail</label>
          <input
            className="form__input form__input_auth"
            required
            placeholder='Ваш E-mail'
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
            placeholder='Ваш пароль'
            id="password"
            name="password"
            type="password"
            minLength="5"
            maxLength="25"
            value={formValue.password}
            onChange={handleChange} />
          <span className="form__error form__error_visible">Что-то пошло не так...</span>
        </fieldset>
        <ErrorMessageApi
          isShowApiError={isShowApiError} />
        <button
          type="submit"
          className="button-style button-style_opacity form__submit-button form__submit-button_auth"
          aria-label="Зарегистрироваться"
          disabled={isLoad} >
          {!isLoad ? "Зарегистрироваться" : "Регистрация..."}
        </button>
      </form>
      <p className="auth__footer">Уже зарегистрированы? {<Link to="/signin" className="link-style link-style_orange auth__link">Войти</Link>}</p>

    </main>
  )
}

export default Register;