import React, { useState } from 'react'
import "./styles/form.scss"
import{Link} from "react-router-dom"
import axios from 'axios'

const Register = () => {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function formHandler (e){
    e.preventDefault()


    await axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
      password
    },{
      withCredentials:true
    })
    .then(res=>{
      console.log(res.data);
      
    })
  }

  return (
    <main>
      <div className="form-container">
        <h2>Register</h2>
        <form  onSubmit={formHandler}>

          <input  onInput={(e)=>{setUsername(e.target.value)}}

          type="text" name='username' placeholder='Username' />

          <input onInput={(e)=>{setEmail(e.target.value)}}
          
          type="text" name='Email' placeholder='Email' />

          <input onClick={(e)=>{setPassword(e.target.value)}}
          
          type="password" name='Password' placeholder='Password' />
          <button>Register</button>
        </form> 
        <p>Already have an account? <Link to="/login" className='togglebar'>Login</Link></p>
        
      </div>
    </main>
  )
}

export default Register