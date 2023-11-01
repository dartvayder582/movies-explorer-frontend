import { memo } from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = memo(() => {

  return (
    <main className='not-found content content_full-vh'>
      <section className="not-found__section ">
        <h1 className="not-found__title">
          404
          <span className="not-found__text">Страница не найдена</span>
        </h1>
        <Link className="not-found__link link-style link-style_orange" to={-1}>Назад</Link>
      </section>
    </main>

  );
});

export default PageNotFound;