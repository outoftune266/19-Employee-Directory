import React, { Component } from "react";
import Search from "../search/search";
import Table from "../table/table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    employees: [],
  };

  initialEmployeeList;

  componentDidMount() {
    console.log("Component Mounted");
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        //console.log(res.data.results);
        this.initialEmployeeList = res.data.results;
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    //console.log(this.initialEmployeeList);
    const searchName = e.target.value;
    //console.log(searchName);
    //console.log(typeof searchName);
    if (searchName) {
      this.searchNames(searchName);
    } else if (!searchName) {
      this.setState({ employees: this.initialEmployeeList });
    }
  };

  searchNames = (searchName) => {
    console.log("searchNames funciton");
    const filteredEmployees = this.state.employees.filter((employee) => {
      let uppercaseName = employee.name.first.toUpperCase();
      let uppercaseSearchName = searchName.toUpperCase();
      return uppercaseName.includes(uppercaseSearchName);
    });
    console.log(filteredEmployees);
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
