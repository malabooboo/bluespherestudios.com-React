import React from 'react';
import style from './header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScrollPosition: 0,
      scrollDirection: ''
    }
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll(this.state));
    window.addEventListener('scroll', () => {
      const initialPosition = this.state.currentScrollPosition;
      const newScrollPosition = document.documentElement.scrollTop;
      
      if (newScrollPosition < initialPosition) {
        this.setState({scrollDirection: ''});
      } else {
      this.setState({scrollDirection: style['header--up']});
      }

      this.setState({currentScrollPosition: newScrollPosition});
    });
  }

  render() {
    return (
      <header className={`${style['header']} ${this.state.scrollDirection}`}>
        <div className={`site-width ${style['site-width']}`}>
          <div className={style['logo']}>
            <div className={style['logo__img']}>
              <img src="/assets/images/bss-logo.png" alt="Blue Sphere Studios logo" />
            </div>
            <h1>Blue Sphere Studios</h1>
          </div>
          <nav className={style.nav}>
            <ul className={style['global-nav']}>
              <li className={style['nav-item']}>
                <span className={style['gnav-link']}>Home</span>
              </li>
              <li className={style['nav-item']}>
                <span className={style['gnav-link']}>Work</span>
              </li>
              <li className={style['nav-item']}>
                <span className={`${style['gnav-link']} ${style['mobile-hidden']}`}>About</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}