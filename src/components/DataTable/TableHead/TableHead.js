import React from "react";

import HeadField from "./HeadField/HeadField";

const TableHead = ({fields,handleSort}) => {
  let isListEmpty = 0;
  let row = null;
  let  keyNames = null;

isListEmpty =!!fields
          const isFieldAnObject =(typeof fields === 'object' && fields !== null &&
          Object.entries(fields).length >0)? (true) :(false);

const resultList = !isFieldAnObject 
                ? (  <HeadField name="brak danych" />) 
                : ( Object.keys(fields[0]).map(function(key){
                            const hd = (key== 'address' || key =='company')? null: <HeadField name={...key} key={key} handleSort={handleSort}/>
                            return hd } )  );


return <tr>{resultList}<th>Tools</th></tr>;
}
export default TableHead