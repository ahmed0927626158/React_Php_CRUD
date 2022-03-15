import React from "react";
class Reternlist extends React.Component
{
    edit()
    {
        return(
        <tr>
            <td> <input type="text" value={this.props.object.id}></input></td>
            <td>{this.props.object.email}</td>
            <td>{this.props.object.username}</td>
            <td>  </td>
        </tr>);

    }
    render()
    {
        return(<tr>
            <td>{this.props.object.id}</td>
            <td>{this.props.object.email}</td>
            <td>{this.props.object.username}</td>
            <td>  <button onClick={this.edit()}>Edit</button></td>
        </tr>);
    }
}
export default Reternlist;