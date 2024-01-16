import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_container">
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add page</Link>
        </div>
    </div>
  )
}

export default Navbar