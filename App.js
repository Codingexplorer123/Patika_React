
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const[users,setUsers]= useState("");
  const[posts,setPosts]= useState("");
  const[id,setId]= useState(1);

  useEffect(() => { getUser(); getPost();},[id]);

    async function getUser () {
      await axios.get(`https://jsonplaceholder.typicode.com/users/` + id)
      .then(res => setUsers(res.data))
    }

    async function getPost () {
      
      await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=` + id)
      .then(res => setPosts(res.data))
      .then((res)=> console.log(res))
    }

    return (
      <div className='App'>
          <h1>kullanici ismi: {users.name}</h1>
          <h1>kullanici email: {users.email}</h1>
          <ul>{posts.map((post) =>
              (<li key={post.id}>kullanici postid:{post.id}</li>))}
          </ul>
          <h1>Gormek istediginiz kullanicinin id sini girin</h1>
          
          <p>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
          </p>
      </div>
      
    )
  }
export default App;
