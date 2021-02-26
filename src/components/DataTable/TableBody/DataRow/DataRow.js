import React from "react";
import { BrowserRouter,  Route, Link } from "react-router-dom";

import DataField from "./DataField/DataField";
import TableHead from "./../../../DataTable/TableHead/TableHead"
import TableBody from "./../../../DataTable/TableBody/TableBody"

const DataRow = ({rowData}) => {
  let isListEmpty = 0;
  let resultList = [];
  let toolList =[];

 
isListEmpty =(rowData==='undefined' || rowData==null)? (true) :(false);
if( isListEmpty ) {
resultList =  <DataField value="brak danych" />
} else
{
  let rowId =null;
   resultList =     Object.entries(rowData).map(([key,field])=>{

                            (key=='id')?(rowId=field):(null)
                            const hd = (key== 'address' || key =='company')? null: <DataField value= {...field} key={key}/>
                            return hd

                     })
   toolList = <div className="rowTools">
                  <ul>
                  <li><Link to={{pathname: "/edit/:"+rowId }}>Edytuj</Link></li>
                  <li><Link to={{pathname: "/delete/:"+rowId }}>Usuń</Link></li>
                  </ul>
            </div>
}
 
return <tr>{resultList}<td>{toolList}</td></tr>;
}
export default DataRow