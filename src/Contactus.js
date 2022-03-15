import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import axios  from "axios";
class Contactus extends React.Component
{
  constructor(props)
  {
    super(props)
    /* this.state={}
   

    */
    this.state={email:'',
              username:'',
              id:'',
  }
}

  change=(event)=>
  {
    this.setState({
      username:event.target.value,
    })
  }
    emailchange=(event)=>
  {
    this.setState({
      email:event.target.value,
    })

  }

  idchange=(event)=>
  {
    this.setState({
      id:event.target.value,
    })

  }
  onSubmit=(event)=>
  {
event.preventDefault();
const object={
id:this.state.id,
email:this.state.email,
username:this.state.username,
}
axios.post('http://localhost:8080/test/insert.php',object).then(res=>console.log(res.data));
this.setState({

            id:'',
          email:'',
         username:'',
             })

  }
  render()
  {//value={this.state.username} // onChange={this.change}   value={this.state.username} onChange={this.change}   onChange={this.idchange}
    return (
      <div className="contact">
   <form id='form1' className='f1' onSubmit={this.onSubmit}>
      
      First Name:  <input type='text'  value={this.state.id} placeholder="user name" onChange={this.idchange} /><br></br>
      
      Last Name:  <input type='text' placeholder="last name"   value={this.state.email}  onChange={this.emailchange} /><br></br>
      Age:   <input type='number'  id='age' placeholder='Age' /><br></br>
      Gender:<input  type='radio' name='g1' id='f' value='Femal'/> Female 
      <input  type='radio' name='g1' id='f' value='Male'/> Male<br></br>
      <br></br><div className="photo">
        <label className="photoleb"><img src="http://localhost:3000/moaus.PNG"></img></label></div>
      <div className="div">
      Height:  <input type='text' id='h' value={this.state.username}    onChange={this.change}   placeholder='Height'  /><br></br>//
      <input  type='submit' value='Add' id='sub'  onSubmit={this.onSubmit}/>
      </div>
      </form>
      </div>
      
    
  );



  }
}

//ReactDOM.render(<NameForm />,document.getElementById('d2'));
export default Contactus;
