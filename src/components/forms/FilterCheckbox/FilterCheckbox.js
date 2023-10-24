import React from 'react';
import '../forms.css';
import './FilterCheckbox.css';

const FilterCheckbox = React.memo(({
  isChecked,
  handleOnChange,
  checkboxText,
}) => {

  return (

    <label htmlFor='shortFilm-option' className='checkbox'>
      <div className='checkbox__switch'>
        <input
          type="checkbox"
          className="checkbox__item"
          name="shortFilm-option"
          id="shortFilm-option"
          value="shortFilm-option"
          checked={isChecked}
          onChange={handleOnChange}
        />
        <span className="checkbox__pseudo-item" />
      </div>
      <span className="checkbox__text">{checkboxText}</span>
    </label>

  )
})

export default FilterCheckbox;