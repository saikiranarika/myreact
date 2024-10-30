import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='sidenav'>
        <ul>
           <Link to='/'><li>Home</li></Link> 
           <Link to='/about'><li>About</li></Link> 
           <Link to='/services'><li>services</li></Link> 
           <Link to='/contact'><li>Contact</li></Link> 
            
        </ul>
    </div>
  )
}

export default Sidenav