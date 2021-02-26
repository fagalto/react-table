import React, {Component } from "react";
import { useAlert } from "react-alert";
import DataService from "./../../services/DataService";
import MessageService from "./../../services/MessageService";
import AddDataComponent from './AddDataComponent'

export default class AddData extends Component {

  state = {
      formFields: [],
      submitted: false,
      formData: []
    };
  constructor(props) {
    super(props);
      
   // console.log('got data to edit:',this.props)
this.state.data  = DataService.getDataFromMemory();
this.formData = [];

    this.saveData = this.saveData.bind(this);
    this.onChange = this.onChange.bind(this);

  }
componentDidMount(){
  (this.state.data!==null)?(
this.form = this.getFormDataScheme()):(null)
 
}

getFormDataScheme(){

   let fieldList = this.state.data[0];

let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
let setNull = obj => setAll(obj, null);
 
 setNull(fieldList)
return fieldList
}
 

  onChange(event) {
    let id =event.target.id;
    let value = event.target.value;
    var stateCopy = Object.assign({}, this.state.formData);
    stateCopy[id] = event.target.value;
    this.setState({formData: stateCopy});

  }

  saveData() {

 let form   = Object.assign({}, this.form, this.state.formData);
this.props.msg.add('dane dodane');
DataService.createInMemory(form);


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

  newTutorial() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {

   const dt = this.state.data
   let ret
   (dt==null)
   ?(ret = <div>Brak danych tablicy w pamięci, przeładuj stronę od początku</div>)
   :(
   // localStorage.setItem('myData', JSON.stringify(dt)),
    ret= (<AddDataComponent state={this.state.submitted.toString()} fields ={this.state.data} onChange={this.onChange} save={this.saveData}  />)
   )
    return ret
  }
}