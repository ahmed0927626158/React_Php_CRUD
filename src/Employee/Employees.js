import React from "react";
import './All.css'
 function Employees ( {getEditableValu,editEmployee,handlCancel})

 {
return(
<tr >
<td> <input type="text" name="firstname" value={getEditableValu.firstname} onChange={editEmployee}></input></td>
<td> <input type="text" name="lastname" value={getEditableValu.lastname} onChange={editEmployee}></input></td>
<td> <input type="text"  name="age"  value={getEditableValu.age}   onChange={editEmployee}></input></td>
<td> <input type="text" name="gender"  value={getEditableValu.gender}   onChange={editEmployee}></input></td>
<td> <input type="text"  name="height" value={getEditableValu.height} onChange={editEmployee}></input></td>
<td> 
    <input   type="submit" id="save" value="Save" style={{color:'white',borderRadius:10,width:110,}} ></input>
    <button id="cance" style={{color:'red',borderRadius:10,width:110,height:50}} onClick={handlCancel}>Cance
    </button>
    </td>
  

</tr>
);
 }
export default Employees;