import React from 'react';

import BaseForm from './Base';
import Highlights from './Highlights';

class Skills extends BaseForm {
  constructor(props){
    super(props);
  }

  save(){
    let name = this.refs.name.value;
    let level = this.refs.level.value;
    let keywords = this.refs.keywords.value;
    // Do some varification on data here...
    let data = this.state.data;
    let newData = {
      name,
      level,
      keywords,
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
    this.props.onChange('skills', data);
  }

  render(){
    return (
      <div>
        <h5>Skills</h5>
        {
          (() => {
            let data = undefined;
            if(this.state.editing !== false){
              data = this.state.data[this.state.editing];
            }else{
              data = {
                name: '',
                level: '',
                keywords: ''
              }
            }
            if(this.state.inserting == true || this.state.editing !== false){
              return(
                <div>
                  <div className="input-field col l12">
                    <input 
                      id="name" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['name']}
                      ref='name' />
                    <label for="name">Name</label>
                  </div>

                  <div className="input-field col l12">
                    <input 
                      id="level" 
                      type="text" 
                      className="validate" 
                      defaultValue={data['level']}
                      ref='level' />
                    <label for="level">Level</label>
                  </div>


                  <div className="input-field col l12">
                    <Highlights 
                      title='Keywords' 
                      defaultValue={data['keywords']}
                      placeholder='Enter the keyword'
                      ref='keywords' />
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
                            <div>{data.name}<br />{data.level}
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

export default Skills;