import React from 'react';

class Footer extends React.Component{
  render() {
    return (
      <footer className="page-footer light-blue darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About Hovert</h5>
              <p className="grey-text text-lighten-4">Hovert is  a resume builder web application built using React.js. Currently it can produce JSON schema of the created resume and provides a live preview.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/GelaniNijraj/Hovert">Fork Hovert on Github</a></li>
                <li><a className="grey-text text-lighten-3" href="http://jsonresume.org/">JSON Resume Schema</a></li>
                <li><a className="grey-text text-lighten-3" href="https://twitter.com/GelaniNijraj">Follow me on twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="http://www.flaticon.com/authors/madebyoliver">Icons made by Madebyoliver</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2017 All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;