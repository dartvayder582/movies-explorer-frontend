import React from 'react';
import studentAvatar from '../../../images/student.jpg'
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section className='section student content' id='student'>
      <h2 className='section__title'>Студент</h2>
      <article className='student__info'>
        <div className='student__text-block'>
          <h3 className='student__title'>Иван</h3>
          <p className='student__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='student__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/dartvayder582' target='_blank' className='student__link link-style' rel="noreferrer">Github</a>
        </div>
        <img className='student__avatar' src={studentAvatar} alt='Фото студента'></img>
      </article>
      <Portfolio />



    </section>
  )
}

export default AboutMe;