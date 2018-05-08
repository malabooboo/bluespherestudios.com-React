import React from 'react';
import ReactDOM from 'react-dom';
import style from './section-about.scss';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenInView: false,
      // inViewClass: '',
      inViewClass: style.inView,
      inViewOffset: 0,
      sectionScrollPosition: 0
    };
  }

  componentDidMount() {
    this.setState({
      sectionScrollPosition: ReactDOM.findDOMNode(this).offsetTop,
      inViewOffset: window.innerHeight / 3
    });
  }

  render() {
    if (
      this.props.scroll > this.state.sectionScrollPosition - this.state.inViewOffset &&
      !this.state.hasBeenInView
    ) {
      this.setState({inViewClass: style.inView, hasBeenInView: true});
    }

    return (
      <section className={`${style.sectionAbout} ${this.state.inViewClass}`}>
        <div className={`site-width ${style.siteWidth}`}>
          <h2 className={style.sectionAbout__heading}>About</h2>
          <p className={`${style.sectionAbout__paragraph} ${style.intro}`}>
            I've been in the business of building websites <a href="https://www.amazon.com/HTML-World-Visual-QuickStart-Guide/dp/0201884488">since 1998</a>.
          </p>
          <p className={style.sectionAbout__paragraph}>
            In those years I have seen the web change and evolve, and I am proud
            to have been part of the early movement of web designers who
            championed web standards. During this time, I was heavily influenced
            by Dave Shea's <a href="http://www.csszengarden.com/">Zen Garden</a> experiment, Dan Cederholm's website, <a href="http://simplebits.com/">Simplebits</a>, and Jefferery
            Zeldman's <a href="https://www.amazon.com/Designing-Web-Standards-Jeffrey-Zeldman/dp/0321616952">Designing with Web Standards</a>. I got hooked on the possibilities with CSS and was part of the
            exciting transition from table layouts to CSS-based design with two
            different companies.
          </p>
          <p className={style.sectionAbout__paragraph}>
            I currently specialize in front-end development as part of Google
            Cloud. In my time with Google Cloud and previously Google Brand
            Studio, I have been part of many launches, including Google for
            Work, Gmail, Calendar, Inbox, and the new Google Earth.
          </p>
        </div>
      </section>
    );
  }
}