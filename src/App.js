import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

export default App;