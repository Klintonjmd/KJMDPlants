import axios from 'axios';
import './App.css';
import { useState } from 'react'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = e => {
    axios.post('http://localhost:8080/signup', {username: username, password: password})
    .then((data)=> {
      console.log(data)
      setUsername('')//reset values to blank after post (submission)
      setPassword('')
    })
  }
  return (
    <div>
      <form onSubmit={submiteHandler}>
        <h3>Sign Up</h3>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} /> 
        <label htmlFor='password'>Password</label>
        <input id='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>
          <button type='button'>Cancel</button>
          <button type='button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
