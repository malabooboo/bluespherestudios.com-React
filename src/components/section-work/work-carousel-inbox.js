import React from 'react';
import style from './work-carousel.scss';

export default class WorkCarouselInbox extends React.Component {
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
      <div className={this.props.currentWork === 'google-inbox' ? style.shown : style.hidden}>
        <div ref={this.carouselRef}
          className={style.carouselSlides}>
          <figure className={`carousel-slide slide1 ` + (this.state.currentSlide === 1 ? 'active' : '')}>
            <img src="/assets/images/google-inbox.jpg" alt="Google Inbox homepage" />
            <figcaption>
              I worked with an agency partner to launch the Inbox marketing site.
              <a href="https://www.google.com/inbox">Visit the site</a>
            </figcaption>
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