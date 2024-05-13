import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
<>
<AdminNavbar></AdminNavbar>
<Outlet></Outlet>
</>
  )
}

export default AdminLayout