import React from "react";

function TableHead(props) {
  return (
    <tr>
      <th>Picture</th>
      <th className="hover" onClick={props.sortNames}>
        Name
      </th>
      <th>Phone #</th>
      <th>Email</th>
    </tr>
  );
}

export default TableHead;
