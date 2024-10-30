import React from 'react'
import {productsData} from '../Data/products'
import { Link } from 'react-router-dom'

function Viewproducts() {
    const slicepraducts = productsData.slice(0 , 3)
  return (
    <div className='maindata'>
        {
          slicepraducts.map((e)=>{
            return(
                <div className='dataproducts'>
                    <img src={e.image} alt="" />
                    <p>Product Id : {e.id}</p>
                    <p>Brand : {e.Brand}</p>
                    <p>Color : {e.Colour}</p>
                    <p>Price:{e.Price}</p>
                </div>
            )
        })
        }
        <Link to='/viewall'><button className='btn btn-primary'>View all</button></Link> 
    </div>
  )
}

export default Viewproducts