import React from 'react';
import style from './style.scss';

export default class Hero extends React.Component {
  render(props) {
    return(
      <section className={style.sectionHero}>
        <div className="site-width">
          <div className={style.avatarFrame}>
            <img src="/assets/images/tim-material-avatar-2-2x.png" alt="Tim's avatar" className={style.avatar} />
          </div>
          <h1 className={style.intro}>Blue Sphere Studios is the portfolio of front end web developer, <strong>Tim Malabuyo</strong>,
          currently @Google, coding from <span className={style.strikethrough}>London</span> the sunny Bay Area, California.</h1>
        </div>
      </section>
    );
  }
}