import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
  
  function formHandle(e){
    e.preventDefault()
  }

  return (

    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form  onSubmit={formHandle}>
          <input type="text" name='username' id='username' placeholder='Enter username' />
          <input type="email" name='email' id='email' placeholder='Enter Email' />
          <input type="password" name='password' id='password' placeholder='Enter Password' />
          <button className='button primary-button' >Register</button>
        </form>
        <p>Already have an account? <Link to={"/Login"}>Login.</Link> </p>
      </div>
    </main>

  )
}

export default Register