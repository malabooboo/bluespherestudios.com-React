import React, {Component} from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/section-hero/section-hero';
import About from './components/section-about/section-about';
import Stats from './components/section-stats/section-stats';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
