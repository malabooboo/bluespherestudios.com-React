import React from 'react';
import style from './section-work.scss';
import WorkCarouselGoogleEarth from './work-carousel-google-earth';
import WorkCarouselQiblaFinder from './work-carousel-qibla-finder';
import WorkCarouselPetra from './work-carousel-petra';
import WorkCarouselInbox from './work-carousel-inbox';

export default class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      startYear: 2013,
      currentYear: new Date().getFullYear(),
      currentWork: 'google-earth'
    };
    this.setWork = this.handleSetWork.bind(this);
  }

  /**
   * Sets the current portfolio piece.
   * @param {string} work The portfolio piece to set as current.
   */
  handleSetWork(work) {
    this.setState(() => ({currentWork: work}));
  }

  render() {
    const tenure = this.state.currentYear - this.state.startYear;

    return(
      <section className={style.sectionWork}>
        <div className="site-width work-container">
          <h2>Work</h2>
          <div className={style.workGoogle}>
            <p className={style.intro}>Over the last {tenure} years as part of Google's Cloud and Brand Studio teams in London and Mountain View,
              I have contributed to many different projects, including...</p>
            <div className={style.carouselContent}>
              <ul className={style.recentWork}>
                <li><a onClick={() => { this.setWork('google-earth')}}>Google Earth</a></li>
                <li><a onClick={() => { this.setWork('qibla-finder')}}>Qibla Finder</a></li>
                <li><a onClick={() => { this.setWork('petra')}}>Petra <span className="mobileHide">Treks / Petra VR</span></a></li>
                <li><a onClick={() => { this.setWork('google-inbox')}}><span className="mobileHide">Google</span> Inbox</a></li>
              </ul>
              <div className={style.carousel}>
                <WorkCarouselGoogleEarth currentWork={this.state.currentWork}></WorkCarouselGoogleEarth>
                <WorkCarouselQiblaFinder currentWork={this.state.currentWork}></WorkCarouselQiblaFinder>
                <WorkCarouselPetra currentWork={this.state.currentWork}></WorkCarouselPetra>
                <WorkCarouselInbox currentWork={this.state.currentWork}></WorkCarouselInbox>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}