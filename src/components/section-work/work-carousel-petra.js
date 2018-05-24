import React from 'react';
import style from './work-carousel.scss';

export default class WorkCarouselPetra extends React.Component {
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
      <div className={this.props.currentWork === 'petra' ? style.shown : style.hidden}>
        <div ref={this.carouselRef}
          className={style.carouselSlides}>
            <figure className={`carousel-slide slide1 ` + (this.state.currentSlide === 1 ? 'active' : '')}>
              <img src="/assets/images/google-petra-01.jpg" alt="Petra Treks homepage" />
              <figcaption>
                An immersive Treks experience for Petra in Jordan, famous for its temples and tombs. The site launched in 47 languages and
                allowed users to rediscover the lost city with Google Street View technology, audio narration and rich imagery.
                <a href="https://g.co/Petra">Visit the site</a>
              </figcaption>
            </figure>
            <figure className={`carousel-slide slide2 ` + (this.state.currentSlide === 2 ? 'active' : '')}>
              <img src="/assets/images/google-petra-02.jpg" alt="Petra Treks" />
              <figcaption></figcaption>
            </figure>
            <figure className={`carousel-slide slide3 ` + (this.state.currentSlide === 3 ? 'active' : '')}>
              <img src="/assets/images/google-petra-04.jpg" alt="Petra VR" />
              <figcaption>
                Petra Cardboard VR built on the success of the Petra Treks site and allowed users to explore Petra in 3D Web VR with Google Cardboard.
                <a href="https://g.co/PetraVR">Visit the site</a>
              </figcaption>
            </figure>
            <figure className={`carousel-slide slide4 ` + (this.state.currentSlide === 4 ? 'active' : '')}>
              <img src="/assets/images/google-petra-03.jpg" alt="Petra VR" />
              <figcaption></figcaption>
            </figure>
            <figure className={`carousel-slide slide5 ` + (this.state.currentSlide === 5 ? 'active' : '')}>
              <img src="/assets/images/google-petra-05.jpg" alt="Petra VR" />
              <figcaption></figcaption>
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