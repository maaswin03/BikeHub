import React from 'react'
import '../Styles/App.css'
import { Link } from 'react-router-dom'
import profile from '../img/bmw.jpeg'

function Navbar() {
  return (
    <div>
      <div className='navbar1'>
        <a href=''><h1>BMW</h1></a>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Bikes</Link></li>
            <li><Link to="/">Service</Link></li>
            <li><Link to="/">Cart</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar