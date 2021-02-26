import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
const EditDataComponent = ({state,fields,onChange,save,values}) => {




const currentSet = (fields[0]==='undefined' || fields[0]===null ||typeof fields[0]=='object') 
?(fields[0])
:(fields);



let fieldList = 0; //get names from table ot row
const isListEmpty =(currentSet==='undefined' || currentSet==null)? (true) :(false);
 (values==='undefined' || values==null)? (values=[]) :(false);
  fieldList=( isListEmpty )
  ? (<p>tablica nie zawiera nagłówków</p>)
  : (

   fieldList =     Object.entries(currentSet).map(([key,field])=>{
          return (

          (key== 'address' || key =='company' || key=='id')
          ? (null)
          : (<div><label>{key}</label><input type = "text" id={key}  key={'input',key} 
           onChange={onChange} defaultValue = {values[key]} /></div>)
          );})
    )

let form =       

<div className="submit-form">
        {state=='true' 
        ? (<div><Redirect to="/datatable" /></div>  ) 
        : ( <div>
            <div className="form-group">
                   {fieldList}
            </div>
                  <button onClick={save} className="btn btn-success"> Save </button>
            </div>
           )
        }
      </div>


return form;
};


export default EditDataComponent

