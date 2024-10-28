import React from 'react'
import './App.css'
import Contact from './Pages/Contact'
function App() {
  return (
    <div>
      <Contact/>
       <Row>
         <Col sm={2}>
            <Sidenav/>
         </Col>

         <Col sm={10}>
            <Header/>
         </Col>
      </Row> 
    </div>
  )
}

export default App
