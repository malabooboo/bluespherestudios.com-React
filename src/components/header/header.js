import React from 'react';
import style from './header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScrollPosition: 0,
      scrollDirection: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const initialPosition = this.state.currentScrollPosition;
    const newScrollPosition = document.documentElement.scrollTop;

    if (newScrollPosition < initialPosition) {
      this.setState({scrollDirection: ''});
    } else {
      this.setState({scrollDirection: style.headerUp});
    }
    this.setState({currentScrollPosition: newScrollPosition});
  }

  render() {
    return (
      <header className={`${style.header} ${this.state.scrollDirection}`}>
        <div className={`site-width ${style.siteWidth}`}>
          <div className={style.logo}>
            <div className={style.logo__img}>
              <img
                src="/assets/images/bss-logo.png"
                alt="Blue Sphere Studios logo"
              />
            </div>
            <h1>Blue Sphere Studios</h1>
          </div>
          <nav className={style.nav}>
            <ul className={style.globalNav}>
              <li className={style.navItem}>
                <a href="#home" className={style.gnavLink}>Home</a>
              </li>
              <li className={style.navItem}>
                <a href="#work" className={style.gnavLink}>Work</a>
              </li>
              <li className={style.navItem}>
                <a href="#about" className={`${style.gnavLink} ${style.mobileHidden}`}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
