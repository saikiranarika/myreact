import React from 'react'
import { useParams } from 'react-router-dom'
import {MobileData} from '../../Data/MobilesData'

function MobDet() {
    const {id} = useParams();
    const mobData = MobileData.find((e)=> e.id === id)
    console.log(id);
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet