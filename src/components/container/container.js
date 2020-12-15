import React, { Component } from "react";
import Search from "../search/search";
import Table from "../table/table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    employees: [],
  };

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

  handleInputChange = (e) => {
    const searchName = e.target.value;
    this.searchNames(searchName);
  };

  searchNames = (searchName) => {
    console.log("searchNames funciton");
    const filteredEmployees = this.state.employees.find((employee) =>
      employee.name.first.includes(searchName)
    );
    this.setState({ employees: filteredEmployees });
  };

  sortNames = () => {
    console.log("sortNames function");
    let sortedEmployees = this.state.employees;
    console.log(sortedEmployees);
    sortedEmployees.sort(function (a, b) {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortedEmployees });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange} />
        <Table employees={this.state.employees} sortNames={this.sortNames} />
      </div>
    );
  }
}

export default Container;
