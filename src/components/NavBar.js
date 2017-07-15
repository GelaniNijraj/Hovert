import React from 'react';

import { Link } from 'react-router';

class NavBar extends React.Component {
  render() {
    return (
      <nav className={'light-blue darken-3'}>
        <div class={'nav-wrapper'}>
          <a href={'#'} className={'brand-logo center'}>
            <img src='resume.png' style={{height: 40, marginTop: 10}} />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;