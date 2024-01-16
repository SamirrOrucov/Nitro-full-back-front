import React from 'react'
import Navbar from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout