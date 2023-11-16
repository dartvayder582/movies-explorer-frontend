import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import '../forms.css';

const SearchForm = ({
  onSubmit,
  onInputChange,
  onCheckboxChange,
  isChecked,
  error,
  value,
}) => {

  return (
    <section>
      <form
        className="form form_search content"
        noValidate>
        <fieldset className="form__fieldset form__fieldset_search">
          <input
            type="text"
            required
            className="form__input form__input_search"
            id="film"
            name="film"
            placeholder="Фильм"
            onChange={onInputChange}
            value={value || ''} />
          <button
            type="submit"
            onClick={onSubmit}
            className="button-style button-style_opacity form__submit-button form__submit-button_search"
            aria-label="Найти" />
          <span className="form__error">{error}</span>
        </fieldset>
        <fieldset className='form__fieldset form__fieldset_checkbox'>
          <FilterCheckbox
            handleOnChange={onCheckboxChange}
            isChecked={isChecked}
            checkboxText={'Короткометражки'}
          />
        </fieldset>
      </form>
    </section>
  )
}

export default SearchForm;