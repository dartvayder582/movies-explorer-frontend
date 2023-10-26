import { memo } from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = memo(({
  navigate,
}) => {
  console.log(navigate);
  const goBack = () => {
    console.log(navigate(-1));
    navigate(-1);
  }

  return (
    <div className="not-found content content_full-vh">
      <h3 className="not-found__title">
        404
        <span className="not-found__text">Страница не найдена</span>
      </h3>
      <Link className="not-found__link link-style link-style_orange" to={-1}>Назад</Link>
    </div>
  );
});

export default PageNotFound;