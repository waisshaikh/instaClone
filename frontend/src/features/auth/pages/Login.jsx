import React, { useState } from 'react'
import "./styles/form.scss"
import { Link } from "react-router-dom"
import { useAuth } from '../hooks/useAuth';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Correct destructuring
  const { handleLogin } = useAuth();

  async function formHandler(e) {
    e.preventDefault();

    try {
      await handleLogin(username, password);
      console.log("Login successful");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={formHandler}>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name='username'
            placeholder='Enter Name'
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name='password'
            placeholder='Enter password'
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?
          <Link to="/register" className='togglebar'> Register</Link>
        </p>
      </div>
    </main>
  )
}

export default Login; 