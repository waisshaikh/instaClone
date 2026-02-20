import React, { useState } from 'react'
import "./styles/form.scss"
import{Link} from "react-router-dom"
import axios from 'axios'


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function formHandler (e){
    e.preventDefault();


    await axios.post('http://localhost:3000/api/auth/login',{
      username,
      password
    },{withCredentials:true})

    .then(res=>{
      console.log(res.data);
      
    })


  }


  return (
    <main>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={formHandler}>
          <input type="text"  onInput={(e)=>{setUsername(e.target.value)}}
           name='username'
           placeholder='Enter Name' />


          <input   onInput={(e)=>{setPassword(e.target.value)}}
          type="password" name='password' placeholder='Enter password' />

          <button>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register" className='togglebar'>Register</Link></p>
      </div>
    </main>
  )
}

export default Login