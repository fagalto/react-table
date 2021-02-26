import React, {Component } from "react";
import DataService from "./../../services/DataService";
import { BrowserRouter, Redirect } from "react-router-dom";


export default class DeleteData extends Component {

constructor(props) {
  super(props);
  this.rowId = this.props.location.pathname.split(':').pop();
  this.deleteData(this.rowId)

  }

deleteData(rowId) {
    DataService.deleteFromMemory(rowId);
  }

  render() {
      return (<Redirect to="/datatable" />);
  }
}