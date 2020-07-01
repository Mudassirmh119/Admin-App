import React, { Component } from "react";
import _ from "lodash";
import Table from "../../Common/table";

class PostsTable extends Component {
  columns = [
    {
      path: "id",
      label: "PostId",
      // content: (movie) => (
      //   <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      // ),
    },
    { path: "username", label: "Username" },
    { path: "title", label: "Title" },
    { path: "body", label: "Description" },
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