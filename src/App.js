
import './App.css';
import './Allcss.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Body from './Componets/Body.js';
import HomeComponent from './Componets/HomeComponent';
import Contactus from './Contactus.js';
import Naviagtion from './Navigate.js';
import Logocomponent from './Logocomponent.js';
import  EditUser from './EditUser.js';
import { useState ,useEffect} from "react";
import CreateTable from './CreateTable';
import axios from 'axios';
import GetInfo from './Employee/GetEmployeeInfo';
import Employee from './Employee/Employee';

function App ()
{
        
  const [customer,setCustomer2]=React.useState([]);

// C:\Users\ahmed\Desktop\tutorial1\w1\src\data.json   http://localhost:3000/tutorial1/w1\src\data.json

    
  useEffect(()=>{
      axios.get('http://localhost:8080/Website3/test.php').then(res=>{
          setCustomer2(res.data);
      console.log(customer)
       })
      .catch(err=>{
      console.log(err);
      })
      },[])
           
    return(
      <div >
    < GetInfo customer={customer}></GetInfo>
 
   <Logocomponent className='log'></Logocomponent>

   
    <Naviagtion className='nav'></Naviagtion>
    <Router>
      <Routes>
      <Route path="/" element={<Body></Body>} exact ></Route>
      <Route path="/home" element={<Body></Body>} exact ></Route>
    <Route path="/add" element={<Contactus></Contactus>} exact></Route>
    <Route path="/edit" element={<CreateTable></CreateTable>} exact></Route>
      <Route path="/delete" element={<EditUser></EditUser>} exact></Route>
      </Routes>
    </Router>
   
   
    <HomeComponent></HomeComponent>
      </div>
    );
    
  
}


function Appp() 
{
  
  const [color, setColor] = useState("red");
 
  
}
export default App;
/*

class App extends React.Component
{
  render()
  {
    return(
<button value="Click" onClick={this.login} ></button>

    );
  }
  login=()=>
  {
fetch('http://3000/tutorial1/w1//src/testphp.php',
{
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  }
})
.then((response)=>response.json())
.then((res)=>{
  alert(res.message);
})
  }
}



*/




