import React from 'react';
import $ from 'jquery';
import Materialize from 'materialize-css';

import CreateFab from './components/CreateFab';
import ResumeForms from './components/ResumeForms';

class CreateScene extends React.Component {
  constructor(props){
    window.$ = window.jQuery = $;
    super(props);
    this.state = {
      resume: {
        basics: {
          "name": "Richard Hendriks",
          "label": "Programmer",
          "picture": "",
          "email": "john@gmail.com",
          "phone": "(912) 555-4321",
          "website": "http://johndoe.com",
          "summary": "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
          "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francisco",
            "countryCode": "US",
            "region": "California"
          },
          "profiles": [{
            "network": "Twitter",
            "username": "john",
            "url": "http://twitter.com/john"
          }]
        },
        "work": [{
          "company": "Pied Piper",
          "position": "CEO/President",
          "website": "http://www.piedpiper.com/",
          "startDate": "1 June, 2013",
          "endDate": "1 June, 2014",
          "summary": "Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.",
          "highlights": [
            "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
            "Successfully won Techcrunch Disrupt",
            "Optimized an algorithm that holds the current world record for Weisman Scores"
          ]
        }],
        "education": [{
          "institution": "University",
          "area": "Software Development",
          "studyType": "Bachelor",
          "startDate": "2011-01-01",
          "endDate": "2013-01-01",
          "gpa": "4.0",
          "courses": [
            "DB1101 - Basic SQL"
          ]
        },
        {
          "institution": "Another University",
          "area": "Software Development",
          "studyType": "Diploma",
          "startDate": "2011-01-01",
          "endDate": "2013-01-01",
          "gpa": "4.0",
          "courses": [
            "DB1101 - Basic SQL"
          ]
        }],
        "skills": [{
          "name": "Web Development",
          "level": "Master",
          "keywords": [
            "HTML",
            "CSS",
            "Javascript"
          ]
        },
        {
          "name": "Compression",
          "level": "Master",
          "keywords": [
            "MPEG",
            "MP4",
            "GIF"
          ]
        }],
        "references": [{
          name: "Erlich Bachman",
          reference: "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
        }]
      }
    };
  }

  componentDidMount(){
    $("#download").modal();
  }

  listener(key, value){
    let resume = this.state.resume;
    resume[key] = value;
    this.setState(resume);
  }

  render() {
    return (
      <div className='row'>

        <div id="download" className="modal">
          <div className="modal-content">
            <div className="row">
              <div id="test1" className="col s12">
                <h5>JSON Schema</h5>
                <textarea style={{height: 200, fontFamily: "monospace"}}>{JSON.stringify(this.state.resume, null, 2)}</textarea>
              </div>
            </div>
          </div>
        </div>

      	<CreateFab />
        <div className='col l3'>
          <div className='row'>
            <ResumeForms 
              data={this.state.resume}
              onChange={this.listener.bind(this)} 
              editing={this.props.params.editing} />
          </div>
        </div>
        <div className='col l9'>
          <div className='row' style={{marginBottom: 0}}>
            <div className='col s6'>
              <h5>Preview</h5>
            </div>
            <div className='col s6' style={{textAlign: 'right'}}>
              <button 
                className="waves-effect waves-light btn light-blue darken-3 modal-trigger" 
                style={{textAlign: 'center', marginTop: 10}}
                onClick={() => $('#download').modal('open')}>SAVE</button>
            </div>
          </div>

          <div style={{height: 100, backgroundColor: '#FFFFFF', minHeight: 500, height: 'auto', padding: 32}} className='col l12 card-panel'>
            <p style={{fontSize: 40, marginBottom: 0, marginTop: 16}}>{this.state.resume.basics.name}</p>
            <p style={{fontSize: 25, margin: 0}}>{this.state.resume.basics.label}</p>

            {
              (() => {
                try{
                  if(this.state.resume.basics.profiles.length !== 0){
                    return(
                      <div className='row'>
                        <div className='col l2' style={{padding: 0}}>
                          {
                            this.state.resume.basics.profiles.map(function(row, index){
                              return(
                                <span style={{float: 'left'}}>
                                  &nbsp;• <a href={row.url}>{row.network}</a>
                                </span>
                              )
                            })
                          }
                        </div>
                      </div>
                    );
                  }
                }catch(e){
                  console.log(e);
                  return;
                }
              })()
            }

            <hr style={{height: 1, border: 'none', marginTop: 20, marginBottom: 20, backgroundColor: '#C4C4C4'}} />

            {
              (() => {
                try{
                  if(this.state.resume.basics.summary.length !== 0){
                    return(
                      <div className='row'>
                        <div className='col l2'>
                          <h5 style={{fontSize: 20}}>About</h5>
                        </div>
                        <div className='col l10'>
                          <p>
                            {this.state.resume.basics.summary}
                          </p>
                          <hr style={{height: 1, border: 'none', marginTop: 20, marginBottom: 20, backgroundColor: '#C4C4C4'}} />

                        </div>
                      </div>
                    );
                  }
                }catch(e){
                  console.log(e);
                  return;
                }
              })()
            }

            {
              (() => {
                if(this.state.resume.work !== undefined && this.state.resume.work.length !== 0){
                  return (
                    <div className='row'>
                      <div className='col l2'>
                        <h5 style={{fontSize: 20}}>Work Experience</h5>
                      </div>
                      <div className='col l10'>
                        {
                          this.state.resume.work.map(function(row){
                            return (
                              <div>
                                <h5 style={{marginBottom: 8, fontSize: 21}}>{row.company}</h5>
                                <p style={{margin: 0, fontSize: 14}}>{row.position}</p>
                                <p style={{margin: 0, fontSize: 14}}>{row.startDate} - {row.endDate}</p>
                                <p style={{margin: 0, marginTop: 10}}>{row.summary}</p>
                                <ul className='browser-default'>
                                  {
                                    row.highlights.map(function(highlight) {
                                      return (<li>⚫ {highlight}</li>);
                                    })
                                  }
                                </ul>
                              </div>
                            );
                          })
                        }
                        <hr style={{height: 1, border: 'none', marginTop: 20, marginBottom: 20, backgroundColor: '#C4C4C4'}} />

                      </div>
                    </div>
                  );
                }
              })()
            }


            {
              (()=> {
                if(this.state.resume.education !== undefined){
                  return (
                    <div className='row'>
                      <div className='col l2'>
                        <h5 style={{fontSize: 20}}>Education</h5>
                      </div>
                      <div className='col l10'>
                        {
                          this.state.resume.education.map(function(row){
                            return (
                              <div>
                                <h5 style={{marginBottom: 8, fontSize: 20}}>{row.institution}</h5>
                                <p style={{margin: 0, fontSize: 17}}>{row.area}, {row.studyType}</p>
                                <p style={{margin: 0}}>{row.startDate} - {row.endDate}</p>
                              </div>
                            );
                          })
                        }
                        <hr style={{height: 1, border: 'none', marginTop: 20, marginBottom: 20, backgroundColor: '#C4C4C4'}} />

                      </div>
                    </div>
                  );
                }
              })()
            }


            {
              (() => {
                if(this.state.resume.skills !== undefined && this.state.resume.skills.length !== 0){
                  return (
                    <div className='row'>
                      <div className='col l2'>
                        <h5 style={{fontSize: 20}}>Skills</h5>
                      </div>
                      <div className='col l10'>
                        {
                          this.state.resume.skills.map(function(row){
                            return (
                              <div className='col l6'>
                                <h5 style={{marginBottom: 8, fontSize: 21}}>{row.name}</h5>
                                <ul className='browser-default'>
                                  {
                                    row.keywords.map(function(keyword) {
                                      return (<li>⚫ {keyword}</li>);
                                    })
                                  }
                                </ul>
                              </div>
                            );
                          })
                        }
                        <hr style={{clear: 'both', height: 1, border: 'none', marginTop: 20, marginBottom: 20, backgroundColor: '#C4C4C4'}} />
                      </div>
                    </div>
                  );
                }
              })()
            }

            {
              (() => {
                if(this.state.resume.references !== undefined && this.state.resume.references.length !== 0){
                  return (
                    <div className='row'>
                      <div className='col l2'>
                        <h5 style={{fontSize: 20}}>References</h5>
                      </div>
                      <div className='col l10'>
                        {
                          this.state.resume.references.map(function(row){
                            return (
                              <div>
                                <p>{row.reference}</p>
                                <p style={{marginBottom: 8, fontWeight: 900, textAlign: 'right'}}>- {row.name}</p>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                  );
                }
              })()
            }

          </div>

        </div>

      </div>
    );
  }
}

export default CreateScene;