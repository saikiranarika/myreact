import React from 'react'
import './App.css'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import  Dashboard  from './Pages/Dashboard';
import Products from './Pages/Products';
import Nodatafound from './Pages/Nodatafound';
import APIdata from './Pages/APIdata';
import Viewproducts from './Pages/Viewproducts';
import MobileView from './Pages/ViewDashboard/MobileView';
import ViewMob from './Pages/ViewAll/ViewMob';
import MobDet from './Pages/Detailes/MobDet';
function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/fetching' exact element={<APIdata />} />
          <Route path='/data' exact element={<Viewproducts />} />
          <Route path='/viewall' exact element={<Viewproducts />} />
          <Route path='/mobileview' exact element={<MobileView />} />
          <Route path='/viewmob' exact element={<ViewMob />} />
          <Route path='/viewmob/:id' exact element={<MobDet />} />
          <Route path='*' exact element={<Nodatafound />} />
        </Routes>
      </Router>


      
    </div>
  )
}

export default App