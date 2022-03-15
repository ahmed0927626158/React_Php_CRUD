
import React, { Component } from "react";
function Naviagtion()
{
    return(

        <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="home">Home
           
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="add">Add User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="delete">Delete User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="edit">Edit User</a>
          <a className="nav-link" href="#"> View Lists</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


        </div>
    );
}


export default Naviagtion;