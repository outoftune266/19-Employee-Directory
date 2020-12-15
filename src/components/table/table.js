import React from "react";
import TableRow from "../tableRow/tableRow";
import TableHead from "../tableHead/tableHead";

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TableRow employees={props.employees} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
