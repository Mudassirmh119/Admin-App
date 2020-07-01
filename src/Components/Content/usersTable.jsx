import React, { Component } from "react";
import _ from "lodash";
import Table from "../Common/table";
class UsersTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      // content: (movie) => (
      //   <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      // ),
    },
    { path: "username", label: "Username" },
    { path: "email", label: "Email" },
    { path: "address.city", label: "City" },
    { path: "phone", label: "Phone" },
    { path: "website", label: "Website" },
    //   {
    //     key: "like",
    //     content: (movie) => (
    //       <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    //     ),
    //   },
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
