import React from 'react';
import style from './work-carousel.scss';

export default class WorkCarouselQiblaFinder extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 1,
      totalSlides: 0
    };
    this.carouselRef = React.createRef();

    this.prevSlide = this.handlePrevSlide.bind(this);
    this.nextSlide = this.handleNextSlide.bind(this);
  }

  componentDidMount() {
    const totalSlides =
        this.carouselRef.current.querySelectorAll('figure').length;
    this.setState(() => ({
      totalSlides: totalSlides
    }));
  }

  handlePrevSlide() {
    let currentSlide = this.state.currentSlide;
    let nextSlide;
    if (currentSlide === 1) {
      nextSlide = this.state.totalSlides;
    } else {
      nextSlide = currentSlide - 1;
    }
    this.setState(prevState => ({
      currentSlide: nextSlide
    }));
  }

  handleNextSlide() {
    let currentSlide = this.state.currentSlide;
    let nextSlide;
    if (currentSlide === this.state.totalSlides) {
      nextSlide = 1;
    } else {
      nextSlide = currentSlide + 1;
    }
    this.setState(prevState => ({
      currentSlide: nextSlide
    }));
  }

  render() {
    return (
      <div className={this.props.currentWork === 'qibla-finder' ? style.shown : style.hidden}>
        <div ref={this.carouselRef}
          className={style.carouselSlides}>
          <figure className={`carousel-slide slide1 ` + (this.state.currentSlide === 1 ? 'active' : '')}>
            <img src="/assets/images/google-qibla-finder-01.jpg" alt="Qibla Finder homepage" />
            <figcaption>Qibla Finder was Google's Ramadan site for 2017, a complex web app which uses the user's location and compass to show them
            the direction to Mecca, and 3D elements to provide an immersive experience.
            <a href="https://qiblafinder.withgoogle.com" target="_blank" rel="noopener noreferrer">See the site</a></figcaption>
          </figure>
          <figure className={`carousel-slide slide2 ` + (this.state.currentSlide === 2 ? 'active' : '')}>
            <img src="/assets/images/google-qibla-finder-03.jpg" alt="Qibla Finder" />
            <figcaption>Tech used on the site included Angular, Three.js, geolocation, and Web Navigator APIs.</figcaption>
          </figure>
          <figure className={`carousel-slide slide3 ` + (this.state.currentSlide === 3 ? 'active' : '')}>
            <img src="/assets/images/google-qibla-finder-02.jpg" alt="Qibla Finder" />
            <figcaption>Qibla Finder was well-received and has been kept live after Ramadan 2017 and actively developed since then.</figcaption>
          </figure>
        </div>

        <nav className={`${style.carouselControls} ` + (this.state.totalSlides === 1 ? style.hidden : '')}>
          <div className="carousel-controls__left" onClick={this.prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <use xlinkHref="#arrow-left"></use>
            </svg>
          </div>
          <div className="carousel-controls__right" onClick={this.nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </div>
        </nav>
      </div>
    );
  }
}