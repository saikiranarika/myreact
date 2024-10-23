import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1> dash board</h1>
        <Link to='/Dashboard'><button className='btn btn-primary'>Login</button></Link>
    </div>
  )
}

export default Dashboard