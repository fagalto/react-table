import React, { Component, PropTypes } from 'react';
import debounce from "debounce";
import TableHead from "./TableHead/TableHead"
import TableBody from "./TableBody/TableBody"
import NavBar from "./NavBar/NavBar"

import DataService from "./../../services/DataService";




class DataTable extends Component {

constructor(props){

  
  super(props);
   this.state.data =  DataService.getDataFromMemory();
    this.sortHandler = this.sortHandler.bind(this);

}

  state = {

    data: [ ],
    matchedData: [ ],
    searchQuery: "", 
    sorted:[]
  };


searchChangedHandler = event => {
    this.setState({ searchQuery: event.target.value }, this.setMatchedData);
  };

sortHandler(field) {
        const dt = this.state.data;
        const order = this.state.sorted[1];
        const ord = (order ==='undefined' ||order===null ||order==1)?-1:1
            Array.prototype.alphaSort = function (sortParameter,order) {
              
                function compare(a, b) {

                    const left =   ((a[sortParameter]!==null)?(a[sortParameter].toString()):('')).replace(/[^a-zA-Z ]/g, "");
                    const right =  ((b[sortParameter]!==null)?(b[sortParameter].toString()):('')).replace(/[^a-zA-Z ]/g, "");

                    if (left < right)
                        return -1*order;
                    if (left > right) 
                        return 1*order;
                    return 0;
                }
                this.sort(compare);
            }
        dt.alphaSort(field,ord);
        this.localData = dt;
        this.setState({ matchedData:  dt, sorted:[field,ord] });

  }

setMatchedData = debounce(() =>{
      const users = this.state.data;

      function isMatched(phrase) {
        
        const regex = new RegExp(`\\b${phrase}.*\\b`, "i");
        return function(user) {
          return Object.values(user).some(val => regex.test(val));
        };
      }
      const isMatchedWithSearchQuery = isMatched(this.state.searchQuery);
      const MatchedData = users.filter(isMatchedWithSearchQuery);
      this.setState({ matchedData:  MatchedData });
    },300);

  componentDidMount(){
    (this.state.data!=null)?
    (this.setMatchedData()):(null)

  }

  render() {

  
     
    return (
      <div>
        <NavBar handleChange={this.searchChangedHandler} searchQuery={this.state.searchQuery}/>
        <table> 
          <thead><TableHead fields={this.state.matchedData} handleSort={this.sortHandler}/></thead>
          <tbody><TableBody fields={this.state.matchedData}/></tbody>
        </table>
     </div>
    );
  }
}

export default DataTable;

