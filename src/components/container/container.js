import React, { Component } from "react";
import Search from "../search/search";
import Table from "../table/table";
import API from "../../utils/API";

class Container extends Component {
  state = {};

  componentDidMount() {
    console.log("Component Mounted");
    this.getEmployees();
  }
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  searchNames = () => {
    console.log("searchNames funciton", this.state);
  };

  sortNames = () => {
    console.log("sortNames function", this.state);
  };

  render() {
    return (
      <div>
        <Search />
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default Container;
