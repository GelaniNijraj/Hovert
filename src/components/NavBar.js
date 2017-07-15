import React from 'react';

import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={'light-blue darken-3'}>
        <div class={'nav-wrapper'}>
          <a href={'#'} className={'brand-logo center'}>
            <img src='images/icon.png' style={{height: 40, marginTop: 10}} />
          </a>
          <ul id='nav-mobile' className={'right hide-on-med-and-down'}>
            <li><Link to='/create'>Create</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;