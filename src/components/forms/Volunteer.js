import React from 'react';

import BaseForm from './Base';
import Highlights from './Highlights';

class Volunteer extends BaseForm {
  constructor(props){
    super(props);
  }

  save(){
    let organization = this.refs.company.value;
    let position = this.refs.position.value;
    let website = this.refs.website.value;
    let startDate = this.refs.startDate.value;
    let endDate = this.refs.endDate.value;
    let summary = this.refs.summary.value;
    let highlights = this.refs.highlights.value;
    // Do some varification on data here...
    let data = this.state.data;
    let newData = {
      company,
      position,
      website,
      startDate,
      endDate,
      highlights,
      summary
    };
    if(this.state.inserting == true){
      data.push(newData);
    }else{
      data[this.state.editing] = newData;
    }
    this.setState({
      inserting: false,
      editing: false,
      data: data
    });
    this.props.onChange('work', data);
  }

  render(){
    return (
      <div>
        <h5>Work Details</h5>
        {
          (() => {
            let data = undefined;
            if(this.state.editing !== false){
              data = this.state.data[this.state.editing];
            }else{
              data = {
                institution: '',
                area: '',
                studyType: '',
                startDate: '',
                endDate: '',
                gpa: ''
              }
            }
            if(this.state.inserting == true || this.state.editing !== false){
              return(
                <div>
                  <div className="input-field col l12">
                    <input 
                      id="company" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['company']}
                      ref='company' />
                    <label for="company">Company</label>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="position" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['position']}
                      ref='position' />
                    <label for="position">Position</label>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="website" 
                      type="text" 
                      className="website" 
                      defaultValue={data['website']}
                      ref='website' />
                    <label for="website">Website</label>
                  </div>

                  <div className="row">
                    <div className="col l6">
                      <label>From</label>
                      <input 
                        type="date" 
                        className="datepicker" 
                        defaultValue={data['startDate']}
                        ref='startDate' />
                    </div>
                    <div className="col l6">
                      <label>To</label>
                      <input 
                        type="date" 
                        className="datepicker" 
                        defaultValue={data['endDate']}
                        ref='endDate' />
                    </div>
                  </div>

                  <div className="input-field col l12">
                    <textarea
                      id="summary" 
                      type="text" 
                      className="materialize-textarea"
                      defaultValue={data['summary']}
                      ref='summary'></textarea>
                    <label for="summary">Summary</label>
                  </div>


                  <div className="input-field col l12">
                    <Highlights 
                      title='Highlights' 
                      defaultValue={data['highlights']}
                      placeholder='Enter the highlight'
                      ref='highlights' />
                  </div>

                  <div className='row'>
                    <div className='col l6'>
                      <a 
                        className="waves-effect waves-light btn col l12 light-blue darken-3" 
                        style={{textAlign: 'center'}}
                        onClick={() => this.setState({inserting: false, editing: false})}>CANCEL</a>
                    </div>
                    <div className='col l6'>
                      <a 
                        className="waves-effect waves-light btn col l12 light-blue darken-3" 
                        style={{textAlign: 'center'}}
                        onClick={() => this.save()}>SAVE</a>
                    </div>
                  </div>
                </div>
              );
            }else{
              return(
                <div>
                  <div className='row'>
                    <div className='col l12'>
                      <a 
                        className="waves-effect waves-light btn col l12 light-blue darken-3" 
                        style={{textAlign: 'center'}}
                        onClick={() => this.setState({inserting: true})}>INSERT NEW</a>
                    </div>
                  </div>

                  <ul className="collection">
                    {
                      this.state.data.map(function(data, index){
                        return (
                          <li className="collection-item" key={index}>
                            <div>{data.position}<br />at {data.company}
                              <a 
                                name='Move Up' 
                                onClick={() => this.moveUp(index)}
                                className="secondary-content"
                                style={{cursor: 'pointer'}}
                                ><i className="material-icons light-blue-text text-darken-3">keyboard_arrow_up</i></a>
                              <a 
                                onClick={() => this.moveDown(index)}
                                className="secondary-content"
                                style={{cursor: 'pointer'}}>
                                <i className="material-icons light-blue-text text-darken-3">keyboard_arrow_down</i>
                              </a>
                              <a 
                                className="secondary-content"
                                style={{cursor: 'pointer'}}
                                onClick={() => this.delete(index)}><i className="material-icons light-blue-text text-darken-3">delete</i></a>
                              <a 
                                className="secondary-content"
                                style={{cursor: 'pointer'}}
                                onClick={() => this.setState({editing: index})}><i className="material-icons light-blue-text text-darken-3">mode_edit</i></a>
                              </div>
                          </li>
                        );
                      }, this)
                    }
                  </ul>
                </div>
              );
            }
          })()
        }
      </div>
    );
  }
}

export default Volunteer;