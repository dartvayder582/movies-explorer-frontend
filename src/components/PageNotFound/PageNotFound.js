import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = React.memo(() => {

  return (
    <div className="not-found content content_full-vh">
      <h3 className="not-found__title">
        404
        <span className="not-found__text">Страница не найдена</span>
      </h3>
      {/* <p className="not-found__text">Страница не найдена</p> */}
      <Link className="not-found__link link-style link-style_orange" to="/">Назад</Link>
      {/* <a href='#' className="not-found__link link-style link-style_orange">Назад</a> */}
    </div>
  );
});

export default PageNotFound;