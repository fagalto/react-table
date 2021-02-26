import React,{Component } from "react";
import { BrowserRouter, Router, Route, Link,useParams } from "react-router-dom";

import DataTable from "./../../components/DataTable/DataTable";
import AddData from "./../../components/AddData/AddData";
import MessageComponent from "./../../components/Message/MessageComponent";
import MessageService from "./../../services/MessageService";
import EditData from "./../../components/EditData/EditData";
import DeleteData from "./../../components/DeleteData/DeleteData";



class Body extends Component {

  state = {

    data: [ ],
  };

constructor(props){
  super(props);
this.data =this.props['fields'];
this.msg = new MessageService;
}
componentDidMount(){
this.data =this.props['fields'];
}
componentDidUpdate(){
this.data =this.props['fields'];
}
  render() {


let ret = null;
 ret =(this.props['fields']===null || this.props['fields']==='undefined')?(ret):
  (ret= ( 
    //  
      <div>
      <BrowserRouter>
        <div className="row">
          <div className="col-3 col-s-3 menu">
            <ul>

                      <li><Link to={{pathname: "/datatable"}}>Pokaż Dane</Link></li>
                      <li><Link to={{pathname: "/add"}}>Dodaj Dane</Link></li>
            </ul>  
          </div> 
          <div className="col-6 col-s-9" > 

                  <Route exact path={["/datatable"]} component={DataTable} />
                  <Route exact path={["/add"]} component={() => <AddData msg={this.msg} />}/>
                  <Route exact path={["/edit/:rowId"]} component={EditData} />
                  <Route exact path={["/delete/:rowId"]} component={DeleteData} />
          </div>
          <div className="col-3 col-s-12">
            <div className="aside">
                <MessageComponent msg={this.msg}/>
            </div>
          </div>          
       </div>
      </BrowserRouter>
      </div>
    
    ))

    return ret;


  }
}


export default Body
