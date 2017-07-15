import React from 'react';

import BaseForm from './Base';

class Education extends BaseForm {
  constructor(props){
    super(props);
  }

  save(){
    let institution = this.refs.institution.value;
    let area = this.refs.area.value;
    let studyType = this.refs.studyType.value;
    let edu_from = this.refs.edu_from.value;
    let edu_to = this.refs.edu_to.value;
    let gpa = this.refs.gpa.value;
    // Do some varification on data here...
    let data = this.state.data;
    let newData = {
      institution: institution,
      area: area,
      studyType: studyType,
      startDate: edu_from,
      endDate: edu_to,
      gpa: gpa
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
    this.props.onChange('education', data);
  }

  render(){
    return (
      <div>
        <h5>Education Details</h5>
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
                      id="institution" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['institution']}
                      ref='institution' />
                    <label for="institution">Institution</label>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="area" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['area']}
                      ref='area' />
                    <label for="area">Area of Study</label>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="studyType" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['studyType']}
                      ref='studyType' />
                    <label for="studyType">Study Type (i.e. Bachelor)</label>
                  </div>

                  <div className="row">
                    <div className="col l6">
                      <label>From</label>
                      <input 
                        type="date" 
                        className="datepicker" 
                        defaultValue={data['startDate']}
                        ref='edu_from' />
                    </div>
                    <div className="col l6">
                      <label>To</label>
                      <input 
                        type="date" 
                        className="datepicker" 
                        defaultValue={data['endDate']}
                        ref='edu_to' />
                    </div>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="gpa" 
                      type="number" 
                      className="validate" 
                      defaultValue={data['gpa']}
                      ref='gpa' />
                    <label for="gpa">GPA</label>
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
                        console.log(index);
                        return (
                          <li className="collection-item" key={index}>
                            <div>{data.studyType}<br />{data.area}
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

export default Education;