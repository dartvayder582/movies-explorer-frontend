import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='project section content' id='project'>
      <h2 className='section__title'>О проекте</h2>
      <article className='two-columns'>
        <div className='two-columns__main-text'>
          <h3 className='two-columns__heading'>Дипломный проект включал 5 этапов</h3>
          <p className='two-columns__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='two-columns__main-text'>
          <h3 className='two-columns__heading'>На выполнение диплома ушло 5 недель</h3>
          <p className='two-columns__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <ul className='list-style schedule'>
        <li className='schedule__item'>
          <h4 className='schedule__title'>Back-end</h4>
          <p className='schedule__text'>1 неделя</p>
        </li>
        <li className='schedule__item'>
          <h4 className='schedule__title'>Front-end</h4>
          <p className='schedule__text'>4 недели</p>
        </li>
      </ul>


    </section>
  )
}

export default AboutProject;