import React from 'react';

import BaseForm from './Base';

class References extends BaseForm {
  constructor(props){
    super(props);
  }

  save(){
    let name = this.refs.name.value;
    let reference = this.refs.reference.value;
    let data = this.state.data;
    let newData = {
      name,
      reference,
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
    this.props.onChange('references', data);
  }

  render(){
    return (
      <div>
        <h5>References</h5>
        {
          (() => {
            let data = undefined;
            if(this.state.editing !== false){
              data = this.state.data[this.state.editing];
            }else{
              data = {
                name: '',
                reference: '',
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
                    <textarea
                      id="reference" 
                      type="text" 
                      className="materialize-textarea"
                      defaultValue={data['reference']}
                      ref='reference'></textarea>
                    <label for="reference">Reference</label>
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
                            <div>By {data.name}
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

export default References;