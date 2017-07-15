import React from 'react';

import { Link } from 'react-router';

class CreateFab extends React.Component{
  render(){
    return(
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </a>
        <ul style={{marginBottom: 30}}>
          <li>
            <Link to="/create/basics" className="btn-floating red"><i className="material-icons">face</i></Link>
            <Link to="/create/basics" className="btn-floating mobile-fab-tip">Basic Profile</Link>
          </li>
          <li>
            <Link to='/create/work' className="btn-floating red"><i className="material-icons">business_center</i></Link>
            <Link to="/create/work" className="btn-floating mobile-fab-tip">Work</Link>
          </li>
          <li>
            <Link to='/create/education' className="btn-floating red"><i className="material-icons">book</i></Link>
            <Link to="/create/education" className="btn-floating mobile-fab-tip">Education</Link>
          </li>
          <li>
            <Link to='/create/skills' className="btn-floating red"><i className="material-icons">book</i></Link>
            <Link to="/create/skills" className="btn-floating mobile-fab-tip">Skills</Link>
          </li>
          <li>
            <Link to='/create/references' className="btn-floating red"><i className="material-icons">book</i></Link>
            <Link to="/create/references" className="btn-floating mobile-fab-tip">References</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default CreateFab;