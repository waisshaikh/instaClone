import React from 'react'
import '../Style/form.scss'
import {Link} from 'react-router-dom'

const Login = () => {

  function formHandle(e){
    e.preventDefault()
  }

  return (

    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form  onSubmit={formHandle}>
          <input type="text" name='username' id='username' placeholder='Enter username' />
          <input type="password" name='password' id='password' placeholder='Enter Password' />
          <button className='button primary-button' >Login</button>
        </form>
        <p>Don't have an account? <Link to={"/Register"}>register.</Link> </p>
      </div>
    </main>

  )
}

export default Login