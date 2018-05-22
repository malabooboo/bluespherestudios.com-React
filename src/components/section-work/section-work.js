import React from 'react';
import style from './section-work.scss';

export default class Work extends React.Component {
  render() {
    return(
      <div className="site-width work-container">
        <h2>Work</h2>
        <div className={style.workGoogle}>
          <p className={style.intro}>Over the last [tenure] years as part of Google's Cloud and Brand Studio teams in London and Mountain View,
            I have contributed to many different projects, including...</p>
          <div className={style.carouselContent}>
            <ul className={style.recentWork}>
              {/* <li><a (click)="setWork('google-earth')" [ngClass]="{'active': currentWork == 'google-earth'}">Google Earth</a></li>
              <li><a (click)="setWork('qibla-finder')" [ngClass]="{'active': currentWork == 'qibla-finder'}">Qibla Finder</a></li>
              <li><a (click)="setWork('petra')" [ngClass]="{'active': currentWork == 'petra'}">Petra <span className="mobile-hide">Treks / Petra VR</span></a></li>
              <li><a (click)="setWork('google-inbox')" [ngClass]="{'active': currentWork == 'google-inbox'}"><span className="mobile-hide">Google</span> Inbox</a></li> */}
            </ul>
            <div className={style.carousel}>
              {/* <work-carousel [hidden]="currentWork != 'google-earth'" [@fadeAnimation]></work-carousel>
              <work-carousel-qibla-finder [hidden]="currentWork != 'qibla-finder'" [@fadeAnimation]></work-carousel-qibla-finder>
              <work-carousel-petra [hidden]="currentWork != 'petra'" [@fadeAnimation]></work-carousel-petra>
              <work-carousel-inbox [hidden]="currentWork != 'google-inbox'" [@fadeAnimation]></work-carousel-inbox> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}