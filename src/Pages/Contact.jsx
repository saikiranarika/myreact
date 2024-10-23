import React from 'react'

function Contact() {
  return (
    <div className='login'>
      <div>
      <center>
      <h1>Login Page</h1>
      <label For="User Name"><b>Username:</b><br />
          <input type="text" maxLength={30} placeholder='User Name /Id'/>
      </label><br />
      <label For="Password"><b>Password: </b><br />
          <input type="password" maxLength={30} placeholder='password'/>
      </label><br /><br />
      <input type="submit" className='submitbtn'/>
      </center>
      </div>
    </div>
    
    
  )
}

export default Contact