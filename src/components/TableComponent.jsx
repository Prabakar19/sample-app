import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import _ from "lodash";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false,
      sortColumn: { path: "id", order: "asc" },
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/hadley/orgs")
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({ data: res, isLoaded: true });
        },
        (error) => {
          this.setState({
            isLoaded: false,
          });
        }
      );
  }

  handleDelete = (user) => {
    const data = this.state.data.filter((m) => m.id !== user.id);

    this.setState({
      data,
    });
  };

  handleSort = () => {
    const { data, sortColumn } = this.state;
    const newdata = _.orderBy(data, [sortColumn.path], [sortColumn.order]);
    this.setState({
      data: newdata,
    });
  };

  render() {
    const { data, isLoaded, sortColumn } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2 style={{ marginLeft: 550 }}>API Demo</h2>
          <table className="table table-dark">
            <TableHeader sortColumn={this.handleSort} />
            <TableBody column={data} onDelete={this.handleDelete} />
          </table>
        </div>
      );
    }
  }
}

export default TableComponent;
