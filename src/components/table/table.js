import React from "react";
import TableHead from "../tableHead/tableHead";

function Table(props) {
  //   console.log(props.employees);

  return (
    <div>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {props.employees.map((employee) => (
            <tr key={employee.login.username}>
              <td>
                <img src={employee.picture.thumbnail} alt="Profile Pic" />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
