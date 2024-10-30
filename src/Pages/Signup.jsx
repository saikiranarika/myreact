import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <h1>Signup page</h1>
        <Link to='/' ><button className='btn btn-warning'> Signup</button></Link>
    </div>
    
  )
}

export default Signup