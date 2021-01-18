import React, { Component } from "react";

class TableBody extends Component {
  state = {};
  render() {
    console.log(this.props.column);
    return (
      <tbody>
        {this.props.column.map((usr) => (
          <tr key={usr.id}>
            <td>{usr.id}</td>
            <td>{usr.login}</td>
            <td>{usr.url}</td>
            <td>{usr.node_id}</td>
            <td>
              <i
                class="fa fa-times"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                onClick={() => this.props.onDelete(usr)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
