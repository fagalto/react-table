import React from "react";

import DataRow from "./DataRow/DataRow";

const TableBody = ({fields}) => {
  let isListEmpty = 0;
  let row ;

isListEmpty =fields? (false):(true);
const FieldList = (isListEmpty ||fields.length==0)
? (row = <DataRow name ="brak pól"/>) 
: (row = Object.entries(fields).map(([key,field])=> <DataRow rowData={...field} key={key}/>));

return row;
}
export default TableBody