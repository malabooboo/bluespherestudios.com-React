import React from 'react';
import style from './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        {/* <div className={`site-width ${style['test']}`}> */}
        <div className="site-width">
          <p>Copyright &copy; 2002 - {new Date().getFullYear()} Blue Sphere Studios</p>
        </div>
      </footer>
    );
  }
}