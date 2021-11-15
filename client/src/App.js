
import React , {useState} from "react";
import axios from 'axios';

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>

function App() {

  
const[fname,setfname] = useState('');
const[lname,setlname] = useState('');

const saveEmpDetails = () =>{
 
  axios.post('http://localhost:3001/insertEmpDetails',
       {fname : fname , 
       lname : lname
      }
       ,).then(() => {
    console.log("post body");
  }).catch((err) => { console.log('Axios Error:', err); })


}
  return (
    <div className="App">
      <label> Employee Details </label><br/><br/><br/><br/>
      First Name : <input type = "text"  name = "fname"  required onChange = {(e) => {
          setfname(e.target.value);
        }}/> <br/><br/>
      Last Name : <input type = "text"  name = "lname"  required onChange = {(e) => {
          setlname(e.target.value);
        }}/><br/><br/>
      <input type = "button" name = "submit" value = "Save" onClick = {saveEmpDetails}/>
    </div>
  );
}

export default App;
