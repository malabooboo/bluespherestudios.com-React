import './app.scss';

import React, {Component} from 'react';
import Waypoint from 'react-waypoint';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import About from './components/section-about/section-about';
import Contact from './components/section-contact/section-contact';
import Hero from './components/section-hero/section-hero';
import PastWork from './components/section-past-work/section-past-work';
import Stats from './components/section-stats/section-stats';
import SvgAssets from './components/svg-assets/svg-assets';

class App extends Component {
  constructor() {
    super();
    this.state = {
      waypointOffset: '30%',
      pastWorkInView: false,
      statsInView: false,
      aboutInView: false,
      contactInView: false
    }
  }

  componentDidMount() {
    this.inViewOffset = window.viewportHeight / 2;
  }

  onWaypointEnter(section) {
    const name = section + 'InView';
    this.setState({[name]: true});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.pastWorkInView !== nextState.pastWorkInView ||
        this.state.statsInView !== nextState.statsInView ||
        this.state.aboutInView !== nextState.aboutInView ||
        this.state.contactInView !== nextState.contactInView) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <main>
          <Hero />
          <Waypoint onEnter={() => {this.onWaypointEnter('pastWork')}}
            bottomOffset={this.state.waypointOffset}>
              <div>
                <PastWork inView={this.state.pastWorkInView} />
              </div>
          </Waypoint>
          <Waypoint onEnter={() => {this.onWaypointEnter('stats')}}
            bottomOffset={this.state.waypointOffset}>
              <div>
                <Stats inView={this.state.statsInView} />
              </div>
          </Waypoint>
          <Waypoint onEnter={() => {this.onWaypointEnter('about')}}
            bottomOffset={this.state.waypointOffset}>
              <div>
                <About inView={this.state.aboutInView} />
              </div>
          </Waypoint>
          <Waypoint onEnter={() => {this.onWaypointEnter('contact')}}
            bottomOffset={this.state.waypointOffset}>
              <div>
                <Contact inView={this.state.contactInView} />
              </div>
          </Waypoint>
        </main>
        <Footer />
        <SvgAssets />
      </div>
    );
  }
}

export default App;
