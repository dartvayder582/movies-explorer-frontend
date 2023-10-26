import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import '../forms.css';

const SearchForm = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="content">
      <form className="form form_search">
        <fieldset className="form__fieldset form__fieldset_search">
          <input
            type="text"
            className="form__input form__input_search"
            id="film"
            name="film"
            placeholder="Фильм" />
          <button
            type="submit"
            className="button-style form__submit-button form__submit-button_search"
            aria-label="Найти" />
        </fieldset>
        <fieldset className='form__fieldset form__fieldset_checkbox'>
          <FilterCheckbox
            handleOnChange={handleOnChange}
            isChecked={isChecked}
            checkboxText={'Короткометражки'}
          />
        </fieldset>


      </form>
    </section>
  )
}

export default SearchForm;