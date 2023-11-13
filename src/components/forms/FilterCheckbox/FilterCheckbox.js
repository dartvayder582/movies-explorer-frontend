import { memo } from 'react';
import '../forms.css';
import './FilterCheckbox.css';

const FilterCheckbox = memo(({
  isChecked,
  handleOnChange,
  checkboxText,
}) => {

  return (

    <label htmlFor='shortFilm-option' className='checkbox'>
      <span className='checkbox__switch button-style button-style_scale'>
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
      </span>
      <span className="checkbox__text">{checkboxText}</span>
    </label>
  )
})

export default FilterCheckbox;