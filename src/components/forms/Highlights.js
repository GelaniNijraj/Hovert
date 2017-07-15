import React from 'react';

/*
  Lots of dirty stuff going down here, probably not the
  best but it works... for now.
  TODO: Improve it
*/

class Highlights extends React.Component {
  constructor(props){
    super(props);
    let data = [];
    if(this.props.defaultValue){
      data = this.props.defaultValue;
    }
    this.state = {
      data: data
    }
    this.counter = 1;
    this.value = data;
    this.length_marker = data.length;
  }

  valueChanged(index){
    let field = document.getElementById('highlight_field_' + index);
    let data = this.state.data;
    if(field.value.trim().length == 0){
      data.splice(index, 1);
      this.moveToNew = true;
    }else{
      data[index] = field.value;
    }
    this.setState({data: data});
    if(this.props.onChange){
      this.props.onChange();
    }
  }

  addNew(){
    let data = this.state.data;
    data.push(this.refs.newField.value);
    this.refs.newField.value = '';
    this.setState({data: data});
    // setting the trigger to update focus
    this.setFocus = true;
    if(this.props.onChange){
      this.props.onChange();
    }
  }

  componentDidUpdate(){
    this.value = this.state.data;
    if(this.setFocus){
      let field = document.getElementById('highlight_field_' + (this.state.data.length - 1));
      field.focus();
      // some dirty hacking to move the cursor at the end of the field
      let value = field.value;
      field.value = '';
      field.value = value;
      this.setFocus = false;
    }
    if(this.moveToNew){
      this.refs.newField.focus();
      this.moveToNew = false;
    }
  }

  componentWillUpdate(){
    if(this.length_marker != this.state.data.length){
      this.counter++;
      this.length_marker = this.state.data.length;
    }
  }

  render() {
    return (
      <div>
        <p style={{color: '#9E9E9E'}}>{this.props.title}</p>
        {
          this.state.data.map(function(data, index){
            return (
              <input 
                type='text' 
                key={this.counter.toString() + index.toString()}
                id={'highlight_field_' + index} 
                placeholder={this.props.placeholder} 
                defaultValue={data} 
                onChange={this.valueChanged.bind(this, index)} />
            );
          }, this)
        }
        <input type='text' placeholder='Enter the highlight' onChange={this.addNew.bind(this)} ref={'newField'} />
      </div>
    );
  } 
}

export default Highlights;