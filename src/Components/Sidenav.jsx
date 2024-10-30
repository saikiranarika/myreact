import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='container'>
    <div className='sidenav bg-dark text-light'>
        <ul>
            <Link to='/dashboard'><li>Dashboard</li></Link> 
            <Link to='/products'><li>Products</li></Link>
            <Link to='/fetching'><li>DataFetching</li></Link>
            <li>Store</li>
            <li>Messages</li>
        </ul>
        <p>Logout</p>
    </div>
    </div>
  )
}

export default Sidenav