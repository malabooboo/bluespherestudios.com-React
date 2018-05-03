import React, {Component} from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/section-hero/section-hero';
import './app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollPosition = document.documentElement.scrollTop;
      this.setState({scroll: scrollPosition});
    });
  }

  render() {
    return (
      <div className="app">
        <Header scroll={this.state.scroll} />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
