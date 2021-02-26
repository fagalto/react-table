import React, {Component } from "react";
import DataService from "./../../services/DataService";
import EditDataComponent  from './EditDataComponent ';

export default class EditData extends Component {

 state = {
      formFields: [],
      submitted: false,
      formData: []
    };
constructor(props) {
    super(props);
    this.state.data =   DataService.getDataFromMemory();
    this.rowId = this.props.location.pathname.split(':').pop();
    this.rowData = DataService.getRowFromMemory(this.rowId) ;
    this.state.formData = this.rowData;

    this.saveData = this.saveData.bind(this);
    this.onChange = this.onChange.bind(this);

  }
componentDidMount(){

}

getFormDataScheme(){

   let fieldList = this.rowData;

    let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
    let setNull = obj => setAll(obj, null);
    setNull(fieldList)
return fieldList
}

  onChange(event) {
    let id =event.target.id;
    let value = event.target.value;
    let stateCopy = Object.assign({},this.state.formData);
    stateCopy[id] = event.target.value;
    this.setState({formData: stateCopy});
  }


  saveData() {

 let form   = this.state.formData;
DataService.UpdateInMemory(this.rowId,form);
              DataService.create(form)
                .then(response => {
                  this.setState({
                    submitted: true
                  });
                  console.log(response.data);
                })
                .catch(e => {
                  console.log(e);
                });
            }

  render() {
 
    return (
          <EditDataComponent 
          state={this.state.submitted.toString()} 
          fields ={this.rowData} 
          onChange={this.onChange} 
          save={this.saveData} 
          values ={this.rowData}/>
              );
  }
}