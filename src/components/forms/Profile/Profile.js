import { useState, memo, useEffect, useRef } from "react";
// import { Link } from 'react-router-dom';
import ErrorMessageApi from '../../ErrorMessageApi/ErrorMessageApi';
import './Profile.css';
import '../forms.css';

const Profile = memo(({
  isLoad, onUpdateUser,
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
    // e.preventDefault();
    // if (!formValue.name || !formValue.email) {
    //   return;
    // }
    // onUpdateUser({
    //   name: formValue.name,
    //   email: formValue.email,
    // });
  }

  return (
    <div className="content profile">
      <form className="form form_profile" onSubmit={handleSubmit}>
        <h2 className="form__heading form__heading_profile">Привет, {currentUser.name}!</h2>
        <fieldset className="form__fieldset form__fieldset_profile">
          <div className="profile__input-area">
            <label htmlFor="name" className="form__label form__label_profile">Имя</label>
            <input
              className="form__input form__input_profile"
              required
              id="name"
              name="name"
              type="name"
              value={formValue.name}
              onChange={handleChange}
              ref={nameRef}
              readOnly={!isEditMode} />
          </div>
          <div className="profile__input-area">
            <label htmlFor="email" className="form__label form__label_profile">E-mail</label>
            <input
              className="form__input form__input_profile"
              required
              id="email"
              name="email"
              type="email"
              value={formValue.email}
              onChange={handleChange}
              readOnly={!isEditMode} />
          </div>
        </fieldset>
        <ErrorMessageApi />
        {isEditMode ?
          <button
            type="submit"
            className="button-style form__submit-button form__submit-button_profile"
            aria-label="Сохранить"
            disabled={isLoad} >
            {!isLoad ? "Сохранить" : "Сохранение..."}
          </button>
          :
          <div className="profile__buttons">
            <button
              type="button"
              className="button-style profile__edit"
              aria-label="Редактировать"
              onClick={handleEditModeClick}>
              Редактировать
            </button>
            <button
              type="button"
              className="button-style profile__logout"
              aria-label="Выйти">
              Выйти из аккаунта
            </button>
          </div>

        }


      </form>

    </div>
  )
});

export default Profile;