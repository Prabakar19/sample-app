import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    return (
      <thead>
        <th>Id</th>
        <th>Login</th>
        <th>URL</th>
        <th>Node Id</th>
      </thead>
    );
  }
}

export default TableHeader;
