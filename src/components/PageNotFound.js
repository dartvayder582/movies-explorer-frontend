import React from 'react';
// import { Link } from 'react-router-dom';

const PageNotFound = React.memo(() => {

  return (
    <div className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__text">Страница не найдена</p>
      {/* <Link className="button button_type_to-main" to="/">Назад</Link> */}
      <a href='#' className="link-style not-found__link">Назад</a>
    </div>
  );
});

export default PageNotFound;