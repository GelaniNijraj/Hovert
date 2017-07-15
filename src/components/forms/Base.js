import React from 'react';
import $ from 'jquery';

class BaseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      inserting: false,
      editing: false
    };
  }

  componentDidMount(){
    $("input, textarea").change(); // This makes the labels float
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 30 // Creates a dropdown of 30 years to control year
    });
  }

  moveDown(index, field = false){
    let data, allData;
    if(field === false){
      data = this.state.data;
    }else{
      allData = this.state.data;
      data = allData[field];
    }

    if((data.length - 1) == index){
      return;
    }else{
      let tmp = data[index + 1];
      data[index + 1] = data[index];
      data[index] = tmp;
      if(field !== false){
        allData[field] = data;
        data = allData;
      }
      this.props.onChange(this.props.name, data);
      this.setState({data: data});
    }
  }

  moveUp(index, field = false){
    console.log(field);
    let data, allData;
    if(field === false){
      data = this.state.data;
    }else{
      allData = this.state.data;
      data = allData[field];
    }
    if(index == 0){
      return;
    }else{
      let tmp = data[index - 1];
      data[index - 1] = data[index];
      data[index] = tmp;
      if(field !== false){
        allData[field] = data;
        data = allData;
      }
      this.props.onChange(this.props.name, data);
      this.setState({data: data});
    }
  }

  delete(index, field = false){
    let data, allData;
    if(field === false){
      data = this.state.data;
    }else{
      allData = this.state.data;
      data = allData[field];
    }
    console.log(index);
    data.splice(index, 1);
    if(field !== false){
      console.log('here');
      allData[field] = data;
      data = allData;
    }
    this.props.onChange(this.props.name, data);
    this.setState({data: data})
  }

}

export default BaseForm;