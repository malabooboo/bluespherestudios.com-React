import React, {Component} from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/section-hero/section-hero';
import PastWork from './components/section-past-work/section-past-work';
import About from './components/section-about/section-about';
import Stats from './components/section-stats/section-stats';
import Contact from './components/section-contact/section-contact';
import SvgAssets from './components/svg-assets/svg-assets';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Hero />
          <PastWork />
          <Stats />
          <About />
          <Contact />
        </main>
        <Footer />
        <SvgAssets />
      </div>
    );
  }
}

export default App;
