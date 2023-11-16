import { useState, memo, useEffect, useRef, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import ApiMessage from '../../ApiMessage/ApiMessage';
import { useValidationForm } from "../../../utils/hooks/useValidationForm";
import './Profile.css';
import '../forms.css';

const Profile = memo(({
  isLoad,
  onUpdateUser,
  isShowApiMessage,
  isSuccessApiMessage,
  apiMessageText,
  hideApiMessage,
  onSignOut,
  regex,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
  } = useValidationForm({
    name: currentUser.name,
    email: currentUser.email,
  });
  // режим редактирования
  const [isEditMode, setIsEditMode] = useState(false);

  // валидация
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    if (isValid && ((values.name !== currentUser.name) || (values.email !== currentUser.email))) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const nameRef = useRef();

  const handleInputChange = (e) => {
    handleChange(e);
    hideApiMessage();
  }

  useEffect(() => {
    setIsEditMode(false);
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const handleEditModeClick = () => {
    setIsEditMode(true);
    hideApiMessage();
    nameRef.current.focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <main className="main content profile">
      <section>
        <form className="form form_profile" onSubmit={handleSubmit}>
          <h1 className="form__heading form__heading_profile">Привет, {currentUser.name}!</h1>
          <fieldset className="form__fieldset form__fieldset_profile">
            <div className={`profile__input-area ${isEditMode ? 'profile__input-area_edit-mode' : ''}`}>
              <label htmlFor="name" className="form__label form__label_profile">Имя</label>
              <input
                className={`form__input form__input_profile ${errors.name && 'form__input_type_error'}`}
                required
                placeholder="Например: Виталий"
                id="name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                value={values.name || ''}
                pattern={regex.name}
                onChange={handleInputChange}
                ref={nameRef}
                readOnly={!isEditMode} />
            </div>
            <span className="form__error">{errors.name}</span>
            <div className={`profile__input-area ${isEditMode ? 'profile__input-area_edit-mode' : ''}`}>
              <label htmlFor="email" className="form__label form__label_profile">E-mail</label>
              <input
                className={`form__input form__input_profile ${errors.email && 'form__input_type_error'}`}
                required
                placeholder="Например: pochta@yandex.ru|"
                id="email"
                name="email"
                type="email"
                value={values.email || ''}
                pattern={regex.email}
                onChange={handleInputChange}
                readOnly={!isEditMode} />
            </div>
            <span className="form__error">{errors.email}</span>
          </fieldset>
          <ApiMessage
            isShowApiMessage={isShowApiMessage}
            isSuccessApiMessage={isSuccessApiMessage}
            apiMessageText={apiMessageText} />
          {isEditMode ?
            <button
              type="submit"
              className={
                `button-style
                form__submit-button
                form__submit-button_profile
                ${!isFormValid ? 'form__submit-button_disable' : 'button-style_opacity'}`}
              aria-label="Сохранить"
              disabled={isLoad || !isFormValid} >
              {!isLoad ? "Сохранить" : "Сохранение..."}
            </button>
            :
            <div className="profile__buttons">
              <button
                type="button"
                className="button-style button-style_opacity profile__edit"
                aria-label="Редактировать"
                onClick={handleEditModeClick}>
                Редактировать
              </button>
              <button
                type="button"
                onClick={onSignOut}
                className="button-style button-style_opacity profile__logout"
                aria-label="Выйти">
                Выйти из аккаунта
              </button>
            </div>
          }
        </form>
      </section>
    </main>
  )
});

export default Profile;