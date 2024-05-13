import React from 'react'
import { Link } from 'react-router-dom'
 import "./AdminNavbar.scss"
import { useContext } from 'react'
import { Maincontext } from '../context/MainProvider'
function AdminNavbar() {
  const {basket}=useContext(Maincontext)
  return (
   <>
    <div className='AdminNavbar'>
        <ul className='AdminNavbar_ul'>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'adminpanel'}>Adminpanel</Link></li>
            <li><Link to={'add'}>add</Link></li>
            <li><Link to={'basket'}>Basket {basket.length}</Link></li>
        </ul>
    </div>
   </>
  )
}

export default AdminNavbar