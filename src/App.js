import React, {Component } from "react";


import "./style.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import Footer from "./components/Footer/Footer";

import DataService from './services/DataService';


class App extends Component {

  state = {

    data: [],
  };

constructor ({datatable}){
super();
 
  (datatable===null || datatable ===undefined)  
  ? (console.log('props table empty, load from webservice'),
    this.loadDatafromWebService ())
  : (console.log('props table not empty, load it here'),
    this.state.data= datatable)

}
  componentDidMount(){
        this.saveDataToMemory();
  }
  componentDidUpdate() {
        this.saveDataToMemory();
  }

  saveDataToMemory() {
        (this.state.data.length==0)
        ?(console.log('data empty yet'))
        :(localStorage.setItem('myData', JSON.stringify(this.state.data)), this.render(),console.log('Data    saved to Local memory'))

  }

  loadDatafromWebService (){
              DataService.getAll()
        .then(response => response.data)
        .then(data => this.setState({data:data}))    
  }

  render() {

   const dt = this.state.data
   let ret;
   (dt==null)
   ?(ret = <div>Loading...</div>)
   :(

    ret= (<div>
      <Header />
      <Body fields={dt}/>
      <Footer title = "project by Agra"/>
      </div>
    ))
    return ret;
  }
}

export default App;
 