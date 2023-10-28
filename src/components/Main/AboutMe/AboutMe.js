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
          <p className='student__subtitle'>Веб-разработчик, 26 лет</p>
          <p className='student__text'>
            Я живу в Ростове-на-Дону, закончил исторический факультет ЮФУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С конца 2022 года начал свое обучение в Яндекс Практикуме.
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с офисной работы.
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