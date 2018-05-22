import React from 'react';
import style from './section-contact.scss';

export default class Contact extends React.Component {
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
      <section className={`${style.sectionContact} ${inViewClass}`}>
        <div className="site-width">
          <h2 className={style.contactHeading}>Elsewhere</h2>
          <div className={style.elsewhereLinks}>
            <a href="https://www.linkedin.com/in/timmalabuyo/" className={`${style.linkLinkedin} ${style.linkIcon}`} title="Tim Malabuyo on LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z"/></svg>
            </a>
            <a href="https://github.com/malabooboo" className={`${style.linkGithub} ${style.linkIcon}`} title="Malabooboo on Github">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#fff">
                <g clipRule="evenodd">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.89-.01-1.74-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05.8-.23 1.65-.34 2.5-.34.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49 3.97-1.36 6.83-5.2 6.83-9.73C22 6.59 17.52 2 12 2"/>
                  <path fill="none" d="M0 0h24v24H0z"/>
                </g>
              </svg>
            </a>
            <a href="https://instagram.com/malabooboo" className={`${style.linkInstagram} ${style.linkIcon}`} title="Malabooboo on Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                <path d="M256 109.3c47.8 0 53.4.2 72.3 1 17.4.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2.9 18.9 1 24.5 1 72.3s-.2 53.4-1 72.3c-.8 17.4-3.7 26.9-6.2 33.2-3.2 8.4-7.1 14.3-13.4 20.6-6.3 6.3-12.2 10.1-20.6 13.4-6.3 2.5-15.8 5.4-33.2 6.2-18.9.9-24.5 1-72.3 1s-53.4-.2-72.3-1c-17.4-.8-26.9-3.7-33.2-6.2-8.4-3.2-14.3-7.1-20.6-13.4-6.3-6.3-10.1-12.2-13.4-20.6-2.5-6.3-5.4-15.8-6.2-33.2-.9-18.9-1-24.5-1-72.3s.2-53.4 1-72.3c.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2 18.9-.8 24.5-1 72.3-1m0-32.2c-48.6 0-54.7.2-73.8 1.1-19 .9-32.1 3.9-43.4 8.3-11.8 4.6-21.7 10.7-31.7 20.6C97.2 117 91 127 86.5 138.8c-4.4 11.4-7.4 24.4-8.3 43.4-.9 19.1-1.1 25.2-1.1 73.8 0 48.6.2 54.7 1.1 73.8.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1.9 25.2 1.1 73.8 1.1s54.7-.2 73.8-1.1c19-.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4.9-19.1 1.1-25.2 1.1-73.8s-.2-54.7-1.1-73.8c-.9-19-3.9-32.1-8.3-43.4-4.6-11.8-10.7-21.7-20.6-31.7C395 97.2 385 91 373.2 86.5c-11.4-4.4-24.4-7.4-43.4-8.3-19.1-.9-25.2-1.1-73.8-1.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9-41.2-91.9-91.9-91.9zm0 151.5c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6-26.7 59.6-59.6 59.6z"/>
                <circle cx="351.5" cy="160.5" r="21.5"/>
              </svg>
            </a>
          </div>
          <p className={style.contactEmail}>Get in touch <a href="mailto:tim_m@bluespherestudios.com">tim_m@bluespherestudios.com</a></p>
        </div>
      </section>
    );
  }
}