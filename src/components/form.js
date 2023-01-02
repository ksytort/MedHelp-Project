import React, {useState} from "react";


export default function Form (){
  const [newName, setnewName]= useState("");
  const [newName2, setnewName2]=useState("");
  const [newName3, setnewName3]=useState("");
  
  function handleSubmit(e) {
    e.preventDefult();
    setnewName("");
    setnewName2("");
    setnewName3("");
  }
  function handleChange(e){
    setnewName(e.target.value);
  }
  function handleChange2(e){
    setnewName2(e.target.value);
  }
  function handleChange3(e){
    setnewName3(e.target.value);
  }

    return (
        <form onSubmit={handleSubmit}
        className="label-wrapper"> 
            <table>
              <thead>
                <tr>
               <th>
            <label>
               MEDICATION 1 
            </label>
            </th>
            <th>
            <input
        type="text1" 
        id="text1"
        value={newName}
        placeholder={'drug name'}
        spellCheck="true"
        onChange={handleChange}
        />
        </th>
      <th>
      <input
        type="datetime-local"
        className="label-wrapper" 
        id="date"
        />
        <label>
            frequency
        </label>
        <input
        type="number" id="quantity" name="quantity" placeholder="quantity" min="1" max="20"
        />  
        <label> a week </label>
        </th>
        <button type="submit" >
        Add <br></br> reminder
        </button>
        </tr>
        </thead>
        </table>
        <br></br>
     <form onSubmit={handleSubmit}
     className="label-wrapper">
      <table>
       <thead>
        <tr>
          <th>
      <label>
      MEDICATION 2
            </label>
            </th>
            <th>
            <input
        type="text1"
        id="text1"
        value={newName2}
        placeholder="drug name"
        spellCheck="true"
        onChange={handleChange2}/>
        </th>
        <th>
      <input
        type="datetime-local"
        className="label-wrapper" 
        id="date"
        />
        <label>
            frequency
        </label>
        <input
        type="number" id="quantity" name="quantity" placeholder="quantity" min="1" max="20"
        />
        <label> a week </label> 
        </th>
        <button type="submit" >
           Add <br></br> reminder
        </button>
        </tr>
        </thead>
        </table>
       
        <br></br>
        <form onSubmit={handleSubmit}
     className="label-wrapper">
      <table>
       <thead>
        <tr>
          <th>
      <label>
      MEDICATION 3
            </label>
            </th>
            <th>
            <input
        type="text1"
        placeholder="drug name"
        value={newName3}
        spellCheck="true"
        onChange={handleChange3}/>
        </th>
        <th>
      <input
        type="datetime-local"
        className="label-wrapper" 
        id="date"
        />
        <label>
            frequency
        </label>
        
        <input
        type="number" id="quantity" name="quantity" placeholder="quantity" min="1" max="20"
        /> 
        
        <label> a week </label> 
        </th>
        
        <button type="submit" >
           Add <br></br> reminder
        </button>
        
        </tr>
        </thead>
        </table>
        </form>
        </form>
        </form>
    )
  
    }
    