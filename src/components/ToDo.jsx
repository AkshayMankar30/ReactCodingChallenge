import React from "react";

function ToDo(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.status}</td>
      <td>
        <button
          onClick={() => props.checkDetail(props.id, props.userId, props.title)}
          className="btn-sm  btn-outline-dark"
        >
          View User
        </button>
      </td>
    </tr>
  );
}

export default ToDo;
