import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import ErrorMessageApi from '../../ErrorMessageApi/ErrorMessageApi';
import './auth.css';
import '../forms.css';

const Login = ({
  isLoad,
  onLogin,
  isShowApiError,
}) => {
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
    <div className="content content_full-vh auth">
      <form className="form form_auth" onSubmit={handleSubmit}>
        <Logo />
        <h2 className="form__heading form__heading_auth">Рады видеть!</h2>
        <fieldset className="form__fieldset form__fieldset_auth">
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
            className="form__input form__input_auth"
            required
            id="password"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange} />
          <span className="form__error"></span>
        </fieldset>
        <ErrorMessageApi
          isShowApiError={isShowApiError} />
        <button
          type="submit"
          className="button-style form__submit-button form__submit-button_auth"
          aria-label="Войти"
          disabled={isLoad} >
          {!isLoad ? "Войти" : "Вход..."}
        </button>
      </form>
      <p className="auth__footer">Ещё не зарегистрированы? {<Link to="/signup" className="link-style link-style_orange auth__link">Регистрация</Link>}</p>

    </div>
  )
}

export default Login;