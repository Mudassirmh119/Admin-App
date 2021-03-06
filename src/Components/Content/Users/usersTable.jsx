import React, { Component } from "react";
import Table from "../../Common/table";
import { Link } from "react-router-dom";

class UsersTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "username", label: "Username" },
    { path: "email", label: "Email" },
    { path: "address.city", label: "City" },
    { path: "phone", label: "Phone" },
    { path: "website", label: "Website" },
    {
      key: "edit",
      content: (user) => (
        <Link to={`/register/${user.id}`} className="btn btn-info btn-sm">
          Edit
        </Link>
      ),
    },
    {
      key: "delete",
      content: (user) => (
        <button
          onClick={() => this.props.onDelete(user)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
