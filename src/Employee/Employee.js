import React, { useState,Fragment } from "react";
import Employees from './Employee'
import data from './data.json'
import   GetInfo from './GetEmployeeInfo'
const Employee=({d,handlEdit})=>
{
    
  

return(
 
    <tr>
<td> {d.firstname}</td>
<td> {d.lastname}</td>
<td>{ d.age}</td>
<td>{ d.gender}</td>
<td>{ d.height}</td> 
<td><button type="button" style={{color:'green',borderRadius:10,width:100,position:"relative"}} onClick={(event)=>handlEdit(event,d)} >Edit</button>
</td>
<td>
    <button type="button" style={{color:'green',borderRadius:10,width:100,marginLeft:-40,}}  >Delete</button>
</td>

</tr>

);
}
export default Employee