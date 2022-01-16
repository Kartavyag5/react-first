import React from "react";
import axios from "axios";
import './App.css';


export default function App() {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://reqres.in/api/users").then((response) => {
      setUsers(response.data);
      console.log(response.data)
    });
  }, []);

  if (!users) return null;
  console.log(users.data[0].first_name);

  return (
    <div>
      <h1>Get API Example</h1>
      {users.data? users.data.map((item,i)=>
          <p>{i}--{item.first_name} {item.id}</p>
      )
      :
      null }
    </div>
  );
}