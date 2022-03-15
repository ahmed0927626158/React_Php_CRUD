
import { render } from "@testing-library/react";
import React from "react";
import Employee from './Employee'
import Employees from './Employees'
import { useState ,useEffect,Fragment} from "react";
import axios from "axios";
import data from '../data.json'
function GetInfo ({customer})
{

const [edit,setEdit]=useState(null);

const [employe,setEmploye]=useState('')
console.log(employe);


   const [getEditableValu,setgetEditableValu]  =useState(
       {
        firstname:'',
        lastname:'',
        age:'',
        gender:'',
        height:''

        })


   

const handlEdit=(event,id)=>
{
event.preventDefault();
setEdit(id.firstname);
const oldFieldvalu=
{
    firstname:id.firstname,
    lastname:id.lastname,
    age:id.age,
    gender:id.gender,
    height:id.height
}

setgetEditableValu(oldFieldvalu);

}

const editEmployee=(event)=>
{
event.preventDefault();
const fieldname=event.target.name;
const value=event.target.value;
const newEdit={...getEditableValu};
newEdit[fieldname]=value;
console.log(value);
setgetEditableValu(newEdit);

}

const saveEdit=(event)=>
{
event.preventDefault();
const saveEdit={
    firstname:getEditableValu.firstname,
    lastname:getEditableValu.lastname,
    age:getEditableValu.age,
    gender:getEditableValu.gender,
    height:getEditableValu.height
}


const newEidtEmployee=[...employe]
const index=customer.findIndex((employe)=>employe.firstname===edit.firstname)
newEidtEmployee[index]=saveEdit;
axios.post('http://localhost:8080/test/update.php ',saveEdit).then(res=>console.log(res.data));
console.log(saveEdit)
//setEmploye(newEidtEmployee);
//update 

setEdit(null);
}

const handlCancel=()=>
{
    setEdit(null);
}



return(
<div className="container mb-5 mt-5 text-left">
<form onSubmit={saveEdit}>
<table className="table table-hover">
        <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age </th>
            <th>Gender</th>
            <th>Height</th> 
            </tr>
        </thead>
        <tbody>
        {customer.map((d,key=d.email)=>(
        <Fragment>
   {edit===d.firstname?(<Employees getEditableValu={getEditableValu}  editEmployee={editEmployee} handlCancel={handlCancel}></Employees>):(<Employee d={d} key={key} handlEdit={handlEdit} ></Employee>)}
    </Fragment>
))}
    
 </tbody>
    </table>

    </form>


</div>);
}
export default GetInfo;
