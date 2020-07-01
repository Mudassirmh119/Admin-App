import React, { Component } from "react";
import Table from "../../Common/table";

class PostsTable extends Component {
  columns = [
    { path: "id", label: "PostId" },
    { path: "username", label: "Username" },
    { path: "title", label: "Title" },
    { path: "body", label: "Description" },

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
    const { posts, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={posts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PostsTable;
