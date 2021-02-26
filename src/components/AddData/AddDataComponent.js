import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

const AddDataComponent = ({state,fields,onChange,save}) => {




//what we have



  let fieldList = 0; //get names from table ot row
const isListEmpty =(fields==='undefined' || fields==null)? (true) :(false);

   fieldList=( isListEmpty ) ?(<p>Pobrano puste dane</p>)
   :( Object.entries(fields[0]).map(([key,field])=>{
          return (

          (key== 'address' || key =='company' || key=='id')
          ? null
          : 
          <div>
          <label >{key}</label>
          <input type = "text" id={key}  key={'input',key} onChange={onChange} />
          </div>
          );
   })
      )

let form =<div className="submit-form">
        {state=='true' 
        ? ( <div><Redirect to="/datatable" /></div>) 
        : (<div>
            <div className="form-group">
                   {fieldList}
                <button onClick={save} className="btn btn-success">Zapisz</button>
            </div>
            </div>
           )}
      </div>


return form;
};


export default AddDataComponent

