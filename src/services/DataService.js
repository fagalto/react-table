
import http from "./http-common";
import debounce from "debounce";
import await from "await";


class DataService  {



  state = {
    name: 'service',
data:[],
  }
  constructor(){    

  }

  getAll() {
    let ret = http.get("/users");
    //console.log(ret);
    return ret;
  }

  getDataFromMemory() {

    return JSON.parse(localStorage.getItem('myData'));
  }

  getRowFromMemory(id) {

    let rows = JSON.parse(localStorage.getItem('myData'));
    let myRow = rows.filter(x => x.id == id);
    return myRow[0];
  }
  createInMemory(formData) {
    let rows = JSON.parse(localStorage.getItem('myData'));
    formData.id=this.getLastId()+1
    rows.push(formData);
    localStorage.setItem('myData', JSON.stringify(rows))

  }
  deleteFromMemory(id){


    let rows = JSON.parse(localStorage.getItem('myData'));
    let notThis = rows.filter(x => x.id != id);
    localStorage.setItem('myData', JSON.stringify(notThis))
console.log('row',id,'deleted')
  }

  UpdateInMemory(id,formData){


    let rows = JSON.parse(localStorage.getItem('myData'));
    let notThisRows = rows.filter(x => x.id != id);
    let myRow = rows.filter(x => x.id == id);
    let updatedRow = Object.assign(myRow,formData );
  
    notThisRows.push(formData);

   localStorage.setItem('myData', JSON.stringify(notThisRows))

  }
  get(id) {
 
    return http.get(`/users/${id}`);
  }

  create(data) {
       //console.log('puttin some data',data);
      // console.log('puttin some data',Object.keys(data));
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  deleteAll() {
    return http.delete(`/users`);
  }
  
getLastId(){

   let fieldList = JSON.parse(localStorage.getItem('myData'));
   let h = 0

let f = Object.entries(fieldList).map(([key,field])=>{
 
          return  field['id'];})
          f.forEach(k=>(k>h?h=k:h=h))
return   h

}

}

export default new DataService()