import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>

      <form action="">
        <img src='/images/men.jpg' alt="" />
        <h1 className='logo'>Login</h1>
        <label htmlFor=""> Enter userid: <br />
          <input type="text" maxLength={35} placeholder='Enter UserId' />
        </label><br />
        <label htmlFor="">Enter password: <br />
          <input type="password"maxLength={20}placeholder='Enter your Password' />
        </label> <br /> <br />
        <Link to='/dashboard'><button className='btn btn-primary'>Login</button></Link> <br />
        <p>Don't have an Account? <Link to='/signup'> SignUp</Link></p>
        </form>
    </div>
  )
}

export default Login