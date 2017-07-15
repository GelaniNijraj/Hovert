import React from 'react';

import BaseForm from './Base';

class Basics extends BaseForm {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      inserting: false,
      editing: false
    }
  }

  save(e, profiles = false){
    let data;
    if(profiles === false){
      let name = this.refs.name.value,
          email = this.refs.email.value,
          label = this.refs.label.value,
          website = this.refs.website.value,
          phone = this.refs.phone.value,
          summary = this.refs.summary.value,
          profiles = this.state.data['profiles'];
      data = {
        name,
        email,
        label,
        website,
        phone,
        summary,
        profiles
      };
    }else{
      console.log('here');
      data = this.state.data;
      console.log(data);
      let newData = {
        network: this.refs.network.value,
        username: this.refs.username.value,
        url: this.refs.url.value,
      };
      if(this.state.inserting == true){
        data['profiles'].push(newData);
      }else{
        data['profiles'][this.state.editing] = newData;
      }
    }

    this.setState({
      inserting: false,
      editing: false,
      data: data
    });
    this.props.onChange('basics', data);
  }

  render(){
    return (
      <div>
        <h5>Basic Information</h5>

        <div className="input-field col l12">
          <input 
            id="name" 
            type="text" 
            ref='name'
            defaultValue={this.state.data.name}
            onChange={this.save.bind(this)}
            className="validate" />
          <label for="name">Full Name</label>
        </div>

        <div className="input-field col l12">
          <input 
            ref='label' 
            id="label" 
            type="text" 
            value={this.state.data.label}
            onChange={this.save.bind(this)}
            className="validate" />
          <label for="label">Label</label>
        </div>

        <div className="input-field col l12">
          <input 
            ref='email' 
            id="email" 
            type="text" 
            value={this.state.data.email}
            onChange={this.save.bind(this)}
            className="validate" />
          <label for="email">Email</label>
        </div>

        <div className="input-field col l12">
          <input 
            ref='website' 
            id="website" 
            type="text" 
            value={this.state.data.website}
            onChange={this.save.bind(this)}
            className="validate" />
          <label for="website">Website</label>
        </div>

        <div className="input-field col l12">
          <input 
            ref='phone' 
            id="phone" 
            type="text" 
            value={this.state.data.phone}
            onChange={this.save.bind(this)}
            className="validate" />
          <label for="phone">Phone</label>
        </div>

        <div className="input-field col l12">
          <textarea 
            ref='summary' 
            id="summary" 
            type="text" 
            value={this.state.data.summary}
            onChange={this.save.bind(this)}
            className="materialize-textarea" />
          <label for="summary">Tell something about yourself</label>
        </div>


        <div>
          <p>Online Profiles</p>
          {
            (() => {
              let data = undefined;
              if(this.state.editing !== false){
                data = this.state.data['profiles'][this.state.editing];
              }else{
                data = {
                  network: '',
                  username: '',
                  url: '',
                }
              }
              if(this.state.inserting == true || this.state.editing !== false){
                return(
                  <div>
                    <div className="input-field col l12">
                      <input 
                        id="network" 
                        type="text" 
                        className="validate" 
                        defaultValue={data['network']}
                        ref='network' />
                      <label for="network">Network</label>
                    </div>

                    <div className="input-field col l12">
                      <input 
                        id="username" 
                        type="text" 
                        className="validate" 
                        defaultValue={data['username']}
                        ref='username' />
                      <label for="username">Username</label>
                    </div>

                    <div className="input-field col l12">
                      <input 
                        id="url" 
                        type="text" 
                        className="validate" 
                        defaultValue={data['url']}
                        ref='url' />
                      <label for="url">Profile URL</label>
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
                          onClick={() => this.save(false, true)}>SAVE</a>
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
                          onClick={() => this.setState({inserting: true})}>INSERT NEW PROFILE</a>
                      </div>
                    </div>


                    <ul className="collection">
                      {
                        this.state.data['profiles'].map(function(data, index){
                          return (
                            <li className="collection-item" key={index}>
                              <div>{data.network}
                                <a 
                                  name='Move Up' 
                                  onClick={() => this.moveUp(index, 'profiles')}
                                  className="secondary-content"
                                  style={{cursor: 'pointer'}}
                                  ><i className="material-icons light-blue-text text-darken-3">keyboard_arrow_up</i></a>
                                <a 
                                  onClick={() => this.moveDown(index, 'profiles')}
                                  className="secondary-content"
                                  style={{cursor: 'pointer'}}>
                                  <i className="material-icons light-blue-text text-darken-3">keyboard_arrow_down</i>
                                </a>
                                <a 
                                  className="secondary-content"
                                  style={{cursor: 'pointer'}}
                                  onClick={() => this.delete(index, 'profiles')}><i className="material-icons light-blue-text text-darken-3">delete</i></a>
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
      </div>
    );
  }
}

export default Basics;