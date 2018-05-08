import React from 'react';
import ReactDOM from 'react-dom';
import style from './section-stats.scss';

export default class Stats extends React.Component {
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

  render(props) {
    return(
      <section className={`${style.sectionStats} ${this.state.inViewClass}`}>
        <div className="site-width">
          <div className={style.content}>
            <div className={style.titles}>
              <h2>Skills and Stats</h2>
              <p>Some of the tech I've used recently...</p>
            </div>
            <ul className={style.tags}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>AngularJs</li>
              <li>Angular 2+</li>
              <li>Typescript</li>
              <li>Django</li>
              <li>Firebase</li>
              <li>Google App Engine</li>
              <li>Git</li>
              <li>Accessibility</li>
              <li>Prototyping</li>
              <li>SASS</li>
              <li>LESS</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Web Standards</li>
              <li>Typography</li>
              <li>Photography</li>
              <li>Lightroom</li>
              <li>Google Maps API</li>
              <li>Gulp / Grunt</li>
              <li>Node.js</li>
              <li>Three.js</li>
              <li>A-frame</li>
              <li>D3</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}