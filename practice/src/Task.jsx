import React ,{useState} from 'react'


export const Task = () => {

const [person, setPerson] = useState({fname:'',lname:'',gender:'',dropDown:'',checking:''})
const [user, setUser] = useState([])

const handleChange =(e)=>{
     //console.log(e.target.value);
    // setPerson({...person,[e.target.name]:e.target.value});
     if(e.target.name !=="gender" && e.target.name !=="checking"){
        setPerson({...person,[e.target.name]:e.target.value});
     }else if(e.target.name === "gender"){
         let allGenders =document.getElementsByName("gender");
         allGenders.forEach(ele=>{
             if(ele.checked){
                setPerson({...person,[e.target.name]:e.target.value});
             }
         });
     }else if(e.target.name ==="checking"){
          let getAllcheckbox =[];
           let allCheckboxes =document.getElementsByName("checking");
           allCheckboxes.forEach(ele =>{
               if(ele.checked){
                   //console.log(ele);
                getAllcheckbox.push(ele.value);
               }
           });
           setPerson({...person,[e.target.name]:getAllcheckbox});
     }

}

const handleSubmit =(e)=>{
   
   e.preventDefault();
    setUser({...person,user});
   console.log(person);

}

    return (
        <div className="sandi" >
            <form>
                <div>
            FirstName : <input type ="text" name ="fname" value={person.fname} onChange={handleChange}/> <br/>
            LastName : <input type ="text" name ="lname" value={person.lname} onChange={handleChange}/> <br/>
            <div>
                Male   : <input type ="radio" name ="gender" value="Male" onChange={handleChange} />
                Female  : <input type ="radio" name ="gender" value="Female" onChange={handleChange}/>
                </div><br/>
                <div>
               <select name="dropDown"  onChange={handleChange}>
                    <option></option>
                    <option >JavaSCript</option>
                    <option>ReactJS</option>
                </select>
                </div>
                <div>
            <input type="checkbox" value="HTML" name="checking" onChange={handleChange} /> HTML
            <input type="checkbox" value="JavaScript" name="checking" onChange={handleChange} /> JavaScript
            <input type="checkbox" value="ReactJS" name="checking" onChange={handleChange} /> ReactJS
            <input type="checkbox" value="CSS" name="checking" onChange={handleChange} /> CSS
            </div>
            <button onClick ={handleSubmit}>Submit</button>
            </div>
            <div>
            FirstName: {user.fname}<br/>
            LastName : {user.lname}<br/>
            Gender   : {user.gender}<br/>
            DropDown : {user.dropDown}<br/>
            checkbox : {user.checking}
            </div>
            
            </form>
        </div>
    )
}
