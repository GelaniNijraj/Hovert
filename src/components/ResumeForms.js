import React from 'react';

import Basics from './forms/Basics';
import Education from './forms/Education';
import Work from './forms/Work';
import Skills from './forms/Skills';
import References from './forms/References';

class ResumeForms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fname: '',
      education: this.props.data.education,
      basics: this.props.data.basics,
      work: this.props.data.work,
      skills: this.props.data.skills,
      references: this.props.data.references,
    }
  }

  listener(key, value){
    this.setState({[key]: value});
    this.props.onChange(key, value);
  }

  render() {
    return (
      <div>
        {(() => {
          switch(this.props.editing){
            case 'basics':
              return <Basics name={'basics'} onChange={this.listener.bind(this)} data={this.state.basics} />
            case 'education':
              return <Education name={'education'} onChange={this.listener.bind(this)} data={this.state.education} />
            case 'work':
              return <Work name={'work'} onChange={this.listener.bind(this)} data={this.state.work} />
            case 'skills':
              return <Skills name={'skills'} onChange={this.listener.bind(this)} data={this.state.skills} />
            case 'references':
              return <References name={'references'} onChange={this.listener.bind(this)} data={this.state.references} />
            default:
              return <Basics name={'basics'} onChange={this.listener.bind(this)} data={this.state.basics} />
          }
        })()}
      </div>
    )
  }
}

export default ResumeForms;