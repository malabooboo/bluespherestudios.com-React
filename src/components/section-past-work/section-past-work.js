import React from 'react';
import style from './section-past-work.scss';

export default class PastWork extends React.Component {
  constructor() {
    super();
    this.state = {
      inViewClass: style.inView
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false;
    if (this.props.inView !== nextProps.inView) {
      shouldUpdate = true;
    }
    return shouldUpdate;
  }

  render() {
    const inViewClass = this.props.inView ? this.state.inViewClass : '';

    return(
      <section className={inViewClass}>
        <div className="site-width">
          <div className={style.secondaryContent}>
            <div className={style.secondaryContent__heading}>
              <h2>Past work</h2>
            </div>
            <div className={`${style.secondaryContent__work} ${style.secondaryContent__work_1}`}>
              <div className={style.contentFilemaker}>
                <div className={style.secondaryContent__imageContainer}>
                  <img className={style.image__image} src="/assets/images/filemaker-homepage.jpg" alt="FileMaker, Inc" />
                  <div className={style.logoOverlay}>
                    <svg className={style.logoOverlay__logo} width="120" height="142" viewBox="0 0 120 142" xmlns="http://www.w3.org/2000/svg">
                      <use xlinkHref="#apple-logo" />
                    </svg>
                  </div>
                </div>
                <div className={style.content}>
                  <h3>FileMaker, an Apple subsidiary</h3>
                  <p>From 2006 - 2013, I was part of FileMaker's web team, involved in the front-end development of the corporate website, an integral part of the multiple product launches every year.</p>
                </div>
              </div>
            </div>

            <div className={style.divider}></div>

            <div className={`${style.secondaryContent__work} ${style.secondaryContent__work_2}`}>
              <div className={style.secondaryContent__imageContainer}>
                <img className={style.image__image} src="/assets/images/mcafee-homepage.jpg" alt="McAfee" />
                <div className={style.logoOverlay}>
                  <svg className={style.logoOverlay__logo} width="120" height="139" viewBox="0 0 120 139" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref="#mcafee-logo" />
                  </svg>
                </div>
              </div>
              <h3>McAfee</h3>
              <p>As a member of the Web User Interface team, I helped launch a major redesign of the consumer website that featured their first CSS-based, "tableless" design in 2005 and another site redesign in 2006.</p>
            </div>
            <div className={`${style.secondaryContent__work} ${style.secondaryContent__work_3}`}>
              <div className={style.secondaryContent__imageContainer}>
                <img className={style.image__image} src="/assets/images/cityteam-international.jpg" alt="Cityteam" />
                <div className={style.logoOverlay}>
                  <img className={`${style.logoOverlay__logo} ${style.cityteamLogo}`} src="/assets/images/cityteam-logo.png" alt="Cityteam logo" />
                </div>
              </div>
              <h3>Cityteam</h3>
              <p>After years as a web developer for Cityteam, I returned to work with old colleagues to help redesign their site, bringing the site out of a tabled layout into a more modern design.</p>
            </div>

            <div className={style.divider}></div>

            <p className={style.seeMore}>See more of my work history and education on <a href="https://www.linkedin.com/in/timmalabuyo/">LinkedIn</a></p>
          </div>
        </div>
      </section>
    );
  }
}