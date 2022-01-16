import './App.css';
import axios from "axios";
import React from "react";

export default function App() {
  const [users, setUsers] = React.useState(null);
  const [name, setName] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://reqres.in/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  function createUser() {
    let data = {name}
    axios
      .post('https://reqres.in/api/users', {
        name:data,
      })
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      });
      
  }

  if (!users) return "No Users!"

  return (
    <div>
      <p>created user: {name}</p>
      <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
      <button onClick={createUser}>Create User</button>
    </div>
  );
}
