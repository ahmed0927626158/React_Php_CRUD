import React, { Component } from 'react'
import GetInfo from './Employee/GetEmployeeInfo';

export default class CreateTable extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
  }
  render(){
    
    return(
      <div>
         <GetInfo></GetInfo>
      </div>
    )
  }
}