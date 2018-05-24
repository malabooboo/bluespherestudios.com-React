import React from 'react';
import style from './work-carousel.scss';

export default class WorkCarouselGoogleEarth extends React.Component {
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
      <div className={this.props.currentWork === 'google-earth' ? style.shown : style.hidden}>
        <div ref={this.carouselRef}
          className={style.carouselSlides}>
          <figure className={`carousel-slide slide1 ` + (this.state.currentSlide === 1 ? 'active' : '')}>
            <img src="/assets/images/google-earth-splash-2.jpg" alt="Google Earth launch splash screen" />
            <figcaption>The new Google Earth launched on Earth Day, 2017. I was responsible for building the front end platform for the first version of Voyager, the content
              feed feature of the new Google Earth.</figcaption>
          </figure>
          <figure className={`carousel-slide slide2 ` + (this.state.currentSlide === 2 ? 'active' : '')}>
            <img src="/assets/images/google-earth-mission-blue-02.jpg" alt="Google Earth Voyager templates" />
            <figcaption>The templates are currently being used by many of Google Earth's content partners, including BBC, National Geographic,
              NASA, and the Jane Goodall Institute.</figcaption>
          </figure>
          <figure className={`carousel-slide slide3 ` + (this.state.currentSlide === 3 ? 'active' : '')}>
            <img src="/assets/images/google-earth-national-treasures.jpg" alt="Google Earth Voyager templates" />
            <figcaption></figcaption>
          </figure>
          <figure className={`carousel-slide slide4 ` + (this.state.currentSlide === 4 ? 'active' : '')}>
            <img src="/assets/images/google-earth-mission-blue-01.jpg" alt="Google Earth Voyager templates" />
            <figcaption></figcaption>
          </figure>
        </div>
        
        <nav className={`${style.carouselControls} ` + (this.state.totalSlides === 0 ? style.hidden : '')}>
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