import { useState, memo, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
import ErrorMessageApi from '../../ErrorMessageApi/ErrorMessageApi';
import './Profile.css';
import '../forms.css';

const Profile = memo(({
  isLoad,
  onUpdateUser,
  isShowApiError,
  onSignOut,
}) => {
  // const currentUser = React.useContext(CurrentUserContext);
  //for dev
  const currentUser = {
    name: 'Иван',
    email: 'pochta@yandex.ru',
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: ''
  });
  const nameRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  useEffect(() => {

    setFormValue({
      name: currentUser.name,
      email: currentUser.email
    })
  }, []);

  const handleEditModeClick = () => {
    setIsEditMode(true);
    nameRef.current.focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    // if (!formValue.name || !formValue.email) {
    //   return;
    // }
    // onUpdateUser({
    //   name: formValue.name,
    //   email: formValue.email,
    // });
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
                className="form__input form__input_profile"
                required
                placeholder="Например: Виталий"
                id="name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                value={formValue.name}
                onChange={handleChange}
                ref={nameRef}
                readOnly={!isEditMode} />
            </div>
            <div className={`profile__input-area ${isEditMode ? 'profile__input-area_edit-mode' : ''}`}>
              <label htmlFor="email" className="form__label form__label_profile">E-mail</label>
              <input
                className="form__input form__input_profile"
                required
                placeholder="Например: pochta@yandex.ru|"
                id="email"
                name="email"
                type="email"
                value={formValue.email}
                onChange={handleChange}
                readOnly={!isEditMode} />
            </div>
          </fieldset>
          <ErrorMessageApi
            isShowApiError={isShowApiError} />
          {isEditMode ?
            <button
              type="submit"
              className="button-style button-style_opacity form__submit-button form__submit-button_profile"
              aria-label="Сохранить"
              disabled={isLoad} >
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