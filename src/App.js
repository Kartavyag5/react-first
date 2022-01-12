import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [name,setName]=useState("");

  function saveData(){
    let data = {name}
    console.warn('data',data)
    fetch('http://127.0.0.1:5000/add_task',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((resp)=>{
      resp.json().then((result)=>{
        console.warn('result',result)
      })
    })
  }

  return(
    <div className='App'>
      <h1>Post API</h1>
      <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
      <button type='button' onClick={saveData}>save new user</button>
    </div>
  )

}
export default App;
