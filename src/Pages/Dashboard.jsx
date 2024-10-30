import { Col, Row } from 'react-bootstrap'
import React from 'react'
// import { Link } from 'react-router-dom'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'
// import Viewproducts from './Viewproducts'
import MobileView from './ViewDashboard/MobileView'

function Dashboard() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
                <Header/>
                
                <MobileView />
            </Col>
        </Row>

        
    </div>
  )
}

export default Dashboard