import React, { Component } from "react";
import { getPosts, deletePost } from "../../../Services/postService";
import _ from "lodash";
import Pagination from "../../Common/pagination";
import PostsTable from "./postsTable";
import { paginate } from "../../../utils/paginate";
import SearchBox from "../searchBox";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: getPosts(),
      pageSize: 10,
      currentPage: 1,
      searchQuery: "",
      sortColumn: { path: "username", order: "asc" },
    };
  }

  handleDelete = (post) => {
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    deletePost(post.id);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      posts: allposts,
    } = this.state;

    let filtered = allposts;
    if (searchQuery)
      filtered = allposts.filter((p) =>
        p.username.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const posts = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: posts };
  };

  render() {
    const { length: count } = this.state.posts;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    // const { user } = this.props;

    if (count === 0) return <p>There are no Posts in the database</p>;

    const { totalCount, data: posts } = this.getPagedData();
    return (
      <React.Fragment>
        <p>Showing {totalCount} Posts from the database</p>

        <SearchBox value={searchQuery} onChange={this.handleSearch} />

        <PostsTable
          posts={posts}
          sortColumn={sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <div className="row">
          <div className="col col-2 offset-5">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
