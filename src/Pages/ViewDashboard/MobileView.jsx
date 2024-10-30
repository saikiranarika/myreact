import React from 'react'
import {MobileData} from '../../Data/MobilesData'
import { Link } from 'react-router-dom'
function MobileView() {
    const viewMob = MobileData.slice(0,3)
  return (
    <div className='container'>
    <div style={{display:'flex',flexWrap:'wrap',gap:'2%'}}>
        {
            viewMob.map((e)=>{
                return(
                    <div style={{border:'2px solid', margin:'2%0',padding:'1%'}}>
                        <img src={e.image} alt="" style={{height:'200px'}} />
                        <p>{e.id}</p>
                        <p>{e.Brand}</p>
                        <p>{e.Colour}</p>
                        <p>{e.Price}</p>
                    </div>
                )
            })
        }
    </div>
    <Link to='/viewmob'>
        <p style={{display:'flex',justifyContent:'flex-end'}}>View all</p>
    </Link> 
    
    </div>
  )
}

export default MobileView