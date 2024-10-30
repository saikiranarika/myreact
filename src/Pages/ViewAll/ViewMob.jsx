import React from 'react'
import {MobileData} from '../../Data/MobilesData'
import { Link } from 'react-router-dom'
function ViewMob() {
    
  return (
    <div className='container' style={{display:'flex',flexWrap:'wrap',gap:'2%'}}>
        {
            MobileData.map((e)=>{
                return(
                    <Link to={`/viewmob/${e.id}`}>
                        <div style={{border:'2px solid', margin:'2%0',padding:'1%'}}>
                            <img src={e.image} alt="" style={{height:'200px'}} />
                            <p>{e.id}</p>
                            <p>{e.Brand}</p>
                            <p>{e.Colour}</p>
                            <p>{e.Price}</p>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ViewMob