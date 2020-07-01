import React, { Component } from "react";
import { getUsers, deleteUser } from "../../Services/userService";
import _ from "lodash";
import Pagination from "./../Common/pagination";
import UsersTable from "./usersTable";
import { paginate } from "./../../utils/paginate";
import SearchBox from "./searchBox";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: getUsers(),
      pageSize: 4,
      currentPage: 1,
      searchQuery: "",
      sortColumn: { path: "name", order: "asc" },
    };
  }

  handleDelete = (user) => {
    const users = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users });

    deleteUser(user.id);
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
      users: allUsers,
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter((u) =>
        u.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    // const { user } = this.props;

    if (count === 0) return <p>There are no users in the database</p>;

    const { totalCount, data: users } = this.getPagedData();
    return (
      <React.Fragment>
        <p>Showing {totalCount} Users from the database</p>

        <SearchBox value={searchQuery} onChange={this.handleSearch} />

        <UsersTable
          users={users}
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

export default Users;
